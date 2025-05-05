const { migrate } = require('./migrate');

const paginatedList = async (Model, req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.items) || 10;
  const skip = (page - 1) * limit;
  const { sortBy = 'enabled', sortValue = -1, filter, equal, q } = req.query;

  const fieldsArray = req.query.fields?.split(',') || [];
  const orConditions = [];
  let productNameMatch = null;

  for (const field of fieldsArray) {
    if (field === 'product') {
      productNameMatch = { name: { $regex: new RegExp(q, 'i') } };
    } else {
      orConditions.push({ [field]: { $regex: new RegExp(q, 'i') } });
    }
  }

  const findFilter = { removed: false };
  if (filter) findFilter[filter] = equal;
  if (orConditions.length) findFilter.$or = orConditions;

  let query = Model.find(findFilter).sort({ [sortBy]: sortValue });
  if (productNameMatch) {
    query = query.populate({ path: 'product', match: productNameMatch });
  } else {
    query = query.populate('product');
  }
  let docs = await query.exec();

  docs = docs.filter((d) => d.product);

  const count = docs.length;
  const pages = Math.ceil(count / limit);
  const paged = docs.slice(skip, skip + limit);

  if (count > 0) {
    return res.status(200).json({
      success: true,
      result: paged.map((x) => migrate(x)),
      pagination: { page, pages, count },
      message: 'Successfully found matching documents',
    });
  }
  return res.status(203).json({
    success: true,
    result: [],
    pagination: { page, pages, count },
    message: 'No matching documents',
  });
};

module.exports = paginatedList;

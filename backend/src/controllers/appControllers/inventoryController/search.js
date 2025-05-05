const { migrate } = require('./migrate');

const search = async (Model, req, res) => {
  const q = req.query.q || '';
  const fieldsArray = req.query.fields?.split(',') || ['name'];

  let orConditions = [];
  let productNameMatch = null;
  for (const field of fieldsArray) {
    if (field === 'product') {
      productNameMatch = { name: { $regex: new RegExp(q, 'i') } };
    } else {
      orConditions.push({ [field]: { $regex: new RegExp(q, 'i') } });
    }
  }

  let query = Model.find({
    removed: false,
    ...(orConditions.length ? { $or: orConditions } : {}),
  });

  if (productNameMatch) {
    query = query.populate({ path: 'product', match: productNameMatch });
  } else {
    query = query.populate('product');
  }

  let results = await query.limit(20).exec();
  results = results.filter((doc) => doc.product);

  const migratedData = results.map((x) => migrate(x));

  if (migratedData.length) {
    return res.status(200).json({
      success: true,
      result: migratedData,
      message: 'Successfully found all documents',
    });
  } else {
    return res.status(202).json({
      success: false,
      result: [],
      message: 'No document found by this request',
    });
  }
};

module.exports = search;

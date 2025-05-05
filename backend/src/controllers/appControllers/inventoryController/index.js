const mongoose = require('mongoose');

const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const paginatedList = require('./paginatedList');
const search = require('./search');

function modelController() {
  const Model = mongoose.model('Inventory');
  const methods = createCRUDController('Inventory');
  methods.list = (req, res) => paginatedList(Model, req, res);
  methods.search = (req, res) => search(Model, req, res);
  return methods;
}

module.exports = modelController();

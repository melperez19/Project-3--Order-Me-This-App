const db = require("../models");

// Defining methods for the eventsController
module.exports = {
  findAll: function(req, res) {
    db.Event
      .find(req.query)
      .sort({ eventDateTime: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  loadEventsByHost: function(req, res) {
    db.Event
      .find({hostEmail: req.params.id})
      .sort({ eventDateTime: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllOrders: function(req, res) {
    db.Order
      .find({eventID: req.params.id})
      .sort({ OrderDateTime: -1 })
      .then(dbModels => res.json(dbModels))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Event
      .findOne({_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

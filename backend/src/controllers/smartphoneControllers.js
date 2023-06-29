const models = require("../models");

const add = (req, res) => {
  const newsmartphone = req.body;

  models.smartphone
    .insert(newsmartphone)
    .then(([result]) => {
      res.location(`/smartphones/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
};

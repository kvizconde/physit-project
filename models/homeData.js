const db = require("../util/database");

function getAllPTs() {
  return db.execute(`SELECT * FROM physiotherapist`);
}

exports.module = {
  getAllPTs,
};

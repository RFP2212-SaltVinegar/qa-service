const express = require('express');
const pool = require('../db/index.js');

module.exports = {
  addQuestionDB: () => {},
  addAnswerDB:  () => {},

  //up to 4 on page load
  getQFromDB: (prodID, quantity, offset, cb) => {
    pool.query(
      `SELECT * FROM questions
      WHERE product_id = $1
      AND reported = ${false}
      LIMIT $2 OFFSET $3`,
      (prodID, quantity, offset),
      (err, result) => {
        if(err) {
          cb(err);
        } else {
          cb(null, result);
        }
      }
    )
  },

  //up to 2/question on page load
  getAFromDB: () => {},
  updateQReportDB: () => {},
  updateQHelpfulDB: () => {},
  updateAReportDB: () => {},
  updateAHelpfulDB: () => {}
}

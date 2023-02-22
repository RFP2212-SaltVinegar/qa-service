const express = require('express');
const pool = require('/Users/archaareads/Documents/Code/SDC/qa-service/db/index.js');

module.exports = {
  addAnswerDB:  () => {},
  //up to 2/question on page load
  getAFromDB: () => {},
  updateAReportDB: (answer_id, cb) => {
    pool.query(
      `UPDATE answers
      SET reported = ${true}
      WHERE id = $1`,
      [answer_id],
      (err, result) => {
        if(err) {
          console.log('ERR: ', err);
          cb(err);
        } else {
          console.log('MODEL SUCESS: ', result);
          cb(null, result);
        }
      }
    )
  },
  updateAHelpfulDB: () => {}
}
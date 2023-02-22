const express = require('express');
const pool = require('/Users/archaareads/Documents/Code/SDC/qa-service/db/index.js');

module.exports = {
  addAnswerDB:  (question_id, { body, date, name, email }, cb) => {
    const query1 =
    `INSERT INTO
    answers (question_id, body, date_added, answerer, email, reported, helpful)
    values ($1, $2, $3, $4, $5, $6, $7)`;
    pool.query(
      query1,
      [question_id, body, date, name, email, false, 0],
      (err, result) => {
        if(err) {
          console.log('ERR: ', err);
          cb(err);
        } else {
          cb(null, result);
        }
      }
    )
  },

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
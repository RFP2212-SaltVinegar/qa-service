const express = require('express');
const pool = require('../../db/index.js');

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
  getAFromDB: (question_id, quantity, offset, cb) => {
    const query2 =
    `SELECT array_to_json(array_agg(row_to_json(answer_alias)))
    FROM (SELECT * FROM answers
    WHERE question_id = $1
    AND reported = ${false}
    LIMIT $2 OFFSET $3) answer_alias`;
    pool.query(
      query2,
      [question_id, quantity, offset],
      (err, result) => {
        if(err) {
          cb(err);
        } else {
          cb(null, result.rows[0]['array_to_json']);
        }
      }
    )
  },
  updateAReportDB: (answer_id, cb) => {
    pool.query(
      `UPDATE answers
      SET reported = ${true}
      WHERE id = $1`,
      [answer_id],
      (err, result) => {
        if(err) {
          cb(err);
        } else {
          cb(null, result);
        }
      }
    )
  },
  updateAHelpfulDB: (answer_id, cb) => {
    pool.query(
      `UPDATE answers
      SET helpful = helpful + 1
      WHERE id = $1`,
      [answer_id],
      (err, result) => {
        if(err) {
          cb(err);
        } else {
          cb(null, result);
        }
      }
    )
  }
}
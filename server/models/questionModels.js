const express = require('express');
const pool = require('/Users/archaareads/Documents/Code/SDC/qa-service/db/index.js');

module.exports = {
  addQuestionDB: ({ product_id, body, date, name, email }, cb) => {
    const query2 =
    `INSERT INTO
    questions (product_id, body, date_added, asker, email, reported, helpful)
    values ($1, $2, $3, $4, $5, $6, $7)`;
    pool.query(
      query2,
      [product_id, body, date, name, email, false, 0],
      (err, result) => {
        if(err) {
          cb(err);
        } else {
          cb(null, result);
        }
      }
    )
  },

  //up to 4 on page load
  getQFromDB: (prodID, quantity, offset, cb) => {
    const query1 =
    `SELECT array_to_json(array_agg(row_to_json(question_alias)))
    FROM (SELECT * FROM questions
    WHERE product_id = $1
    AND reported = ${false}
    LIMIT $2 OFFSET $3) question_alias`;
    pool.query(
      query1,
      [prodID, quantity, offset],
      (err, result) => {
        if(err) {
          cb(err);
        } else {
          cb(null, result.rows[0]['array_to_json']);
        }
      }
    )
  },

  updateQReportDB: (question_id, cb) => {
    pool.query(
      `UPDATE questions
      SET reported = ${true}
      WHERE id = $1`,
      [question_id],
      (err, result) => {
        if(err) {
          cb(err);
        } else {
          cb(null, result);
        }
      }
    )
  },
  updateQHelpfulDB: (question_id, cb) => {
    pool.query(
      `UPDATE questions
      SET helpful = helpful + 1
      WHERE id = $1`,
      [question_id],
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

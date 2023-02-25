const express = require('express');
const pool = require('../../db/index.js');

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
    `SELECT json_build_object(
      'product_id', ${prodID},
      'results', (
        WITH questionRows AS (
          SELECT * FROM questions
          WHERE product_id = ${prodID}
          AND reported = false
          LIMIT ${quantity} OFFSET ${offset}
          )
        SELECT COALESCE(json_agg(json_build_object(
          'question_id', id,
          'question_body', body,
          'question_date', date_added,
          'asker_name', asker,
          'question_helpfulness', helpful,
          'reported', reported,
          'answers', (
            WITH answerRows AS (
              SELECT * FROM answers
              WHERE question_id = questionRows.id
              AND reported = false
              )
            SELECT COALESCE(json_object_agg(
              id, json_build_object(
                'id', id,
                'body', body,
                'date', date_added,
                'answerer_name', answerer,
                'helpfulness', helpful,
                'photos', (
                  WITH photoRows AS (
                    SELECT * FROM answer_photos
                    WHERE answer_id = answerRows.id
                    )
                  SELECT COALESCE(json_agg(url), '[]'::json) FROM photoRows
                )
              )
            ), '{}'::json) FROM answerRows
          )
        )), '[]'::json) FROM questionRows
      )
    )`;
    pool.query(
      query1,
      (err, result) => {
        if(err) {
          cb(err);
        } else {
          cb(null, result.rows[0]['json_build_object']);
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

const express = require('express');
const client = require('../db/index.js');

module.exports = {
  addQuestionDB: () => {},
  addAnswerDB:  () => {},
  getQFromDB: () => {}, //up to 4 on page load
  getAFromDB: () => {}, //up to 2/question on page load
  updateQReportDB: () => {},
  updateQHelpfulDB: () => {},
  updateAReportDB: () => {},
  updateAHelpfulDB: () => {}
}

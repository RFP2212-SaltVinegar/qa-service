// LIBRARY IMPORTS
const csvToJSON = require('csvtojson');
const jsonToCsv = require('json2csv').parse;
const fs = require('fs');

const transformBody = (body) => {
  const trimmedBody = body.trim();
  return trimmedBody;
}

csvToJSON().fromFile('db/testETL.csv')
  .then((testFile) => {
    fs.writeFileSync('db/testETLTransformed.csv', jsonToCsv(testFile.map(row => {
      return {
        id:row.id,
        question_id: row.question_id,
        body: transformBody(row.body),
        date_added: row.date_written,
        answerer: row.answerer_name,
        reported: row.reported,
        helpful: row.helpful
      }
    }), { fields: ['id', 'question_id', 'body', 'date_added', 'answerer', 'reported', 'helpful']}));
  } )

  csvToJSON().fromFile('db/testETL.csv')
  .then((testFile) => {
    fs.writeFileSync('db/testETLTransformed.csv', jsonToCsv(testFile.map(row => {
      return {
        id:row.id,
        question_id: row.question_id,
        body: transformBody(row.body),
        date_added: row.date_written,
        answerer: row.answerer_name,
        reported: row.reported,
        helpful: row.helpful
      }
    }), { fields: ['id', 'question_id', 'body', 'date_added', 'answerer', 'reported', 'helpful']}));
  } )

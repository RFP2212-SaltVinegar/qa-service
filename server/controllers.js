const questionModel = require('./models/questionModels.js');
const answerModel = require('./models/answerModels.js');

module.exports = {
  createQ: (req, res) => {
    // MAKE SURE A PRODUCT ID IS INCLUDED
    if (!req.body.product_id) {
      res.status(400).send('product_id required')
    }
    questionModel.addQuestionDB(req.body, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  createA: (req, res) => {
    // MAKE SURE A QUESTION ID IS INCLUDED
    if (!req.params.question_id) {
      res.status(400).send('question_id required')
    }
    answerModel.addAnswerDB(req.params.question_id, req.body, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  get: (req, res) => {
    // EXTRACT QUERY PARAMETERS FROM ROUTE
    let { product_id, page, count } = req.query;

    // MAKE SURE A PRODUCT ID IS INCLUDED
    if (!product_id) {
      res.status(400).send('product_id required')
    }

    // SET ALL QUERY PARAMETERS TO INTEGERS
    product_id = parseInt(product_id);
    count = count ? parseInt(count) : 4;
    page = page ? (parseInt(page) - 1) * count : 0;

    questionModel.getQFromDB(product_id, count, page,(err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  updateQR: (req, res) => {
    // MAKE SURE A QUESTION ID IS INCLUDED
    if (!req.params.question_id) {
      res.status(400).send('question_id required')
    }
    questionModel.updateQReportDB(req.params.question_id, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  updateQH: (req, res) => {
    // MAKE SURE A QUESTION ID IS INCLUDED
    if (!req.params.question_id) {
      res.status(400).send('question_id required')
    }
    questionModel.updateQHelpfulDB(req.params.question_id, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  updateAR: (req, res) => {
    // MAKE SURE AN ANSWER ID IS INCLUDED
    if (!req.params.answer_id) {
      res.status(400).send('answer_id required')
    }
    answerModel.updateAReportDB(req.params.answer_id, (err, data) => {
      if (err) {
        console.log('ERROR: ', err);
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  updateAH: (req, res) => {
    // MAKE SURE AN ANSWER ID IS INCLUDED
    if (!req.params.answer_id) {
      res.status(400).send('answer_id required')
    }
    answerModel.updateAHelpfulDB(req.params.answer_id, (err, data) => {
      if (err) {
        console.log('ERROR: ', err);
        res.send(err)
      } else {
        res.send(data)
      }
    })
  }
}

const questionModel = require('./models/questionModels.js');

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
        console.log('POST RESPONSE: ', data);
        res.send(data)
      }
    })
  },
  createA: () => {},
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
  updateQR: () => {},
  updateQH: () => {},
  updateAR: () => {},
  updateAH: () => {}
}

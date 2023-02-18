const model = require('./models.js');

module.exports = {
  createQ: () => {},
  createA: () => {},
  get: (req, res) => {
    model.getQFromDB(req.prodID, req.quantity, req.offset,(err, data) => {
      if (err) {
        res.send(err)
      } else (
        res.send(data)
      )
    })
  },
  updateQR: () => {},
  updateQH: () => {},
  updateAR: () => {},
  updateAH: () => {}
}

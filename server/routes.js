const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/qa/questions', controller.createQ);
router.post('/qa/question/${id}/answers', controller.createA);

router.get('/qa/questions?product_id=${prodID}', controller.get);

router.put('/qa/questions/${id}/report', controller.updateQR);
router.put('/qa/questions/${id}/helpful', controller.updateQH);
router.put('/qa/answers/${id}/report', controller.updateAR);
router.put('/qa/answers/${id}/helpful', controller.updateAH);

module.exports = router;

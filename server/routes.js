const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/qa/questions', controller.createQ);
router.post('/qa/question/:question_id/answers', controller.createA);

router.get('/qa/questions', controller.get);

router.put('/qa/questions/:question_id/report', controller.updateQR);
router.put('/qa/questions/:question_id/helpful', controller.updateQH);
router.put('/qa/answers/:answer_id/report', controller.updateAR);
router.put('/qa/answers/:answer_id/helpful', controller.updateAH);

module.exports = router;

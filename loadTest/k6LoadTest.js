import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

require('dotenv').config();

export function handleSummary(data) {
  return {
    'summary.html': htmlReport(data)
  }
};

export let options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '3m', target: 100 },
    { duration: '1m', target: 300 },
    { duration: '3m', target: 300 }
  ]
};

export default () => {
  let qId = Math.floor(Math.random() * 3518950);
  let aId = Math.floor(Math.random() * 6879290);
  let pId = Math.floor(Math.random() * 1000000);
  http.batch([
    ['PUT', `http://${process.env.SITE_URL}:${process.env.PORT}/qa/questions/${qId}/helpful`],
    ['PUT', `http://${process.env.SITE_URL}:${process.env.PORT}/qa/answers/${aId}/helpful`]
  ]);
  sleep(1);
};
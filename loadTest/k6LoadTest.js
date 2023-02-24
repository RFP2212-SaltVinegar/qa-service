import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const URL = `http://localhost:3000`;

export function handleSummary(data) {
  return {
    'summary.html': htmlReport(data)
  }
};

export let options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '2m', target: 100 },
    { duration: '30s', target: 300 },
    { duration: '2m', target: 300 }
  ],
  thresholds: {
    // During the whole test execution, the error rate must be lower than 1%.
    http_req_failed: ['rate<0.01'],
    // 90% of requests must finish within 400ms.
    http_req_duration: ['p(90) < 20000']
  }
};

export default () => {
  let pId = Math.floor(Math.random() * 1000000);
  let qId = Math.floor(Math.random() * 3518950);
  let aId = Math.floor(Math.random() * 6879290);
  http.batch([
    ['GET', `${URL}/qa/questions?product_id=${pId}`],
    ['PUT', `${URL}/qa/questions/${qId}/helpful`],
    ['PUT', `${URL}/qa/answers/${aId}/helpful`]
  ]);
  sleep(1);
};
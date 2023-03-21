<h1 align="center">
  <br>
  Question & Answer Microservice
  <br>
</h1>

A modernized back end system able to withstand web scale traffic loads for an existing retail web application.

<div align='center'>
  <img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white' />
  <img src='https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white' />
  <img src='https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white' />
  <img src='https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white' />
  <img src='https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white' />
  <img src='https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white' />
  <img src='https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white' />
  <img src='https://img.shields.io/badge/Amazon%20AWS-232F3E.svg?style=for-the-badge&logo=Amazon-AWS&logoColor=white' />
  <img src='https://img.shields.io/badge/k6-7D64FF.svg?style=for-the-badge&logo=k6&logoColor=white' />
  <img src='https://custom-icon-badges.demolab.com/badge/Loader.io-40AEF0.svg?style=for-the-badge&logo=loader_io&logoColor=white' />
</div>

## Route Endpoints
This microservice handles requests from the following routes related to the question and answer section of the retail site:
  - <code>/qa/questions</code>
  - <code>/qa/questions/:question_id/answers</code>
  - <code>/qa/questions/:question_id/report</code>
  - <code>/qa/questions/:question_id/helpful</code>
  - <code>/qa/answers/:answer_id/report</code>
  - <code>/qa/answers/:answer_id/helpful</code>
  
## Performance Testing

### Postman Testing
![speedTestInitial](https://user-images.githubusercontent.com/115492619/226761612-cc04d52c-7307-4b2d-9c5b-d71504a68e8f.png)

### k6 Testing
![k6-initialLocalStressTest_PUT-only](https://user-images.githubusercontent.com/115492619/226761355-90f60cde-25e9-443f-bbf6-5dfd7d0f2ddf.png)
![pass-localStressTest](https://user-images.githubusercontent.com/115492619/226761377-fb87bae5-5a5e-473c-a7a6-a3e9561c1315.png)

### loader.io Testing

## Relational Database Schema Design
![Screen Shot 2023-03-21 at 4 43 51 PM](https://user-images.githubusercontent.com/115492619/226767382-2b3f21a5-de89-427f-8a0e-d23849387e1f.png)

## Installation:

### Install Dependencies
- run the command `npm install` in the project root.

### Setup environment variables
- create a local file `.env` using `example.env` as a template.
  - `.env` is listed in the `.gitignore` file and thus will not be added to Git's source control
  - populate this new `.env` file with the required values for your local machine

  # Running the Server:
- in the terminal, run the following command:
  - `npm run server-dev`

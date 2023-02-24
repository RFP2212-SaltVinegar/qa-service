DROP DATABASE IF EXISTS question_answer;

CREATE DATABASE question_answer;

\c question_answer;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER,
  body VARCHAR(1000),
  date_added VARCHAR(20),
  asker VARCHAR(60),
  email VARCHAR(100),
  reported BOOLEAN DEFAULT FALSE,
  helpful INTEGER DEFAULT 0
);

CREATE INDEX questions_product_id_idx ON questions(product_id);

COPY questions
FROM '/Users/archaareads/Documents/Code/SDC/qa-service/db/data/questions.csv'
DELIMITER ','
HEADER csv;

CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER,
  body VARCHAR (1000),
  date_added VARCHAR(20),
  answerer VARCHAR(60),
  email VARCHAR(100),
  reported BOOLEAN DEFAULT FALSE,
  helpful INTEGER DEFAULT 0,
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE INDEX answers_question_id_idx ON answers(question_id);

COPY answers
FROM '/Users/archaareads/Documents/Code/SDC/qa-service/db/data/answers.csv'
DELIMITER ','
HEADER csv;

CREATE TABLE answer_photos (
  id SERIAL PRIMARY KEY NOT NULL,
  answer_id INTEGER,
  url VARCHAR(2048),
  FOREIGN KEY (answer_id) REFERENCES answers(id)
);

CREATE INDEX photos_answer_id_idx ON answer_photos(answer_id);

COPY answer_photos
FROM '/Users/archaareads/Documents/Code/SDC/qa-service/db/data/answersPhotosTransformed.csv'
DELIMITER ','
HEADER csv;

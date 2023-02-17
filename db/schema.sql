DROP DATABASE IF EXISTS question_answer;

CREATE DATABASE question_answer;

\c question_answer;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER,
  body VARCHAR(1000),
  date_added VARCHAR(20),
  asker VARCHAR(60),
  reported BOOLEAN DEFAULT FALSE,
  helpful INTEGER DEFAULT 0
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER,
  body VARCHAR (1000),
  date_added VARCHAR(20),
  answerer VARCHAR(60),
  reported BOOLEAN DEFAULT FALSE,
  helpful INTEGER DEFAULT 0,
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

COPY answers
FROM '/Users/archaareads/Documents/Code/SDC/qa-service/db/testETLTransformed.csv'
DELIMITER ','
HEADER csv;

CREATE TABLE answer_photos (
  id SERIAL PRIMARY KEY NOT NULL,
  answer_id INTEGER,
  url TEXT,
  FOREIGN KEY (answer_id) REFERENCES answers(id)
);

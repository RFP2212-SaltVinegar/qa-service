DROP DATABASE IF EXISTS questionAnswer;

CREATE DATABASE questionAnswer;

\c questionsandanswers;

CREATE TABLE questions {
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER,
  body VARCHAR(500),
  date_added TIMESTAMP,
  asker VARCHAR(30),
  reported BOOLEAN DEFAULT FALSE,
  helpful INTEGER DEFAULT 0
};

CREATE TABLE answers {
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER,
  body VARCHAR (2000),
  date_added TIMESTAMP,
  answerer VARCHAR(30),
  reported BOOLEAN DEFAULT FALSE,
  helpful INTEGER DEFAULT 0,
  FOREIGN KEY (question_id) REFERENCES questions(id)
};

CREATE TABLE answerPhotos {
  id SERIAL PRIMARY KEY NOT NULL,
  answer_id INTEGER,
  url TEXT,
  FOREIGN KEY (answer_id) REFERENCES answers(id)
};

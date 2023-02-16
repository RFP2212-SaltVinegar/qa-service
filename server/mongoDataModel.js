// mongo
import mongoose from 'mongoose';
const { Schema } = mongoose;

const questionAnswer = new mongoose.Schema({
  product_id: Number,
  question_id: {
    type: Number,
    unique: true
  },
  question_body: String,
  question_date: Date,
  asker: String,
  question_helpfulness: Number,
  reported: {
    type: Boolean,
    default: false
  },
  answers: {
    answer_id: {
      type: Number,
      unique: true
    },
    answer_body: String,
    answer_date: Date,
    answerer: String,
    answer_helpfulness: Number,
    reported: {
      type: Boolean,
      default: false
    },
    photos: {
      id: {
        type: Number,
        unique: true
      },
      url: String
    }
  }
});

const QA = mongoose.model('QA', questionAnswer);

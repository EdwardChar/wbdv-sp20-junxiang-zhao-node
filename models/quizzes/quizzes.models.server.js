const mongoose = require('mongoose')
const quizSchema = require('./quizzes.schema.server')
const quizModel = mongoose.model(
    'QuizModel',
    quizSchema
)
module.exports = quizModel

const mongoose = require('mongoose')
const questionsSchema = mongoose.Schema({
    title: String,
    question: String,
    correct: String,
    answer: String,
    type: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'ESSAY']},
    choices: [String]
}, {collection: 'questions'})
module.exports = questionsSchema

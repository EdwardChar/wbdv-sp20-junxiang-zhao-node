let questions = require('./questions');
findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId);
module.exports = {
    findQuestionsForQuiz
};

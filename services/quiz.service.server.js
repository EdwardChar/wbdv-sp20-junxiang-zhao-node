let quizzes = require('./quizzes');
const findAllQuizzes = () => quizzes;
const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId);
module.exports = {
    findAllQuizzes,
    findQuizById
};

const quizService = require('../services/quiz.service.server');
module.exports = function(app) {
    app.get('/api/quizzes', (req, res) => {
        res.send(quizService.findAllQuizzes())
    });
    app.get('/api/quizzes/:qid', (req, res) => {
        const quizId = req.params['qid'];
        const quiz = quizService.findQuizById(quizId);
        res.json(quiz)
    })
};

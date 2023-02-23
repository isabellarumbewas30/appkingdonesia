const quizController = require('../controllers/QuizController');
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:id', quizController.findOne);
router.put('/:id', quizController.update);
router.delete('/:id', quizController.delete);
router.get('/course/:id', quizController.getByCourseId);
router.get('/soal/:id', quizController.getBySoalId);

module.exports = router;
const jobsheetController = require('../controllers/Jobsheet');
const router = require('express').Router();

router.post('/one', jobsheetController.submitOne);
router.post('/many', jobsheetController.submitMany);

module.exports = router;
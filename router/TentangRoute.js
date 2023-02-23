const AboutUsController = require('../controllers/AboutUs');
const router = require('express').Router();

router.post('/', AboutUsController.createAbout);
router.get('/', AboutUsController.getAbout);
router.put('/', AboutUsController.updateAbout);


module.exports = router;
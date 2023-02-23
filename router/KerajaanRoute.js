const kerajaanController = require('../controllers/KerajaanController');
const router = require('express').Router();

router.post('/', kerajaanController.createKerajaan);
router.get('/', kerajaanController.getAllKerajaan);
router.get('/:id', kerajaanController.getKerajaanbyid);
router.get('/agama/:agama', kerajaanController.getByAgama);
router.get('/lokasi/:lokasi', kerajaanController.getByLokasi);
router.put('/:id', kerajaanController.updateKerajaan);
router.delete('/:id', kerajaanController.deleteKerajaan);


module.exports = router;
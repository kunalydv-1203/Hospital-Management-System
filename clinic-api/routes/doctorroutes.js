const express = require('express');
const router = express.Router();

const doctorscontroller = require('../controller/doctorscontroller')

router.post('/drregistration',doctorscontroller.doctorregistration)
router.get('/drlist',doctorscontroller.doctorlist)
router.get('/singledrlist/(:id)',doctorscontroller.singledoctorlist)
router.delete('/drdelete/(:id)',doctorscontroller.doctordelete)
router.put('/drupdate/(:id)',doctorscontroller.imageupload,doctorscontroller.doctorupdate)
router.post('/drlogin',doctorscontroller.doctorlogin)

module.exports = router;
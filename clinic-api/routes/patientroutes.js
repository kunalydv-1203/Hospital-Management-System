const express = require("express")
const router = express.Router()

const patientcontroller = require('../controller/patientcontroller')

router.post("/prescriptionform",patientcontroller.patientdata)
router.get("/prescriptiondata",patientcontroller.getpatientdata)
router.get("/singleprescriptiondata/(:id)",patientcontroller.getsinglepatientdata)






module.exports = router;
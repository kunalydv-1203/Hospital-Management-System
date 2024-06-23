const patient = require('../config/mongodb_patientconfig')

exports.patientdata = (request,response) => {
    const Data = {
        pfullname : request.body.pfullname,
        pmobileno : request.body.pmobileno,
        pgender : request.body.pgender,
        page : request.body.page,
        psymptoms : request.body.psymptoms,
        ptreatment : request.body.ptreatment,
        drname:request.body.drname,
        drid:request.body.drid
    }
    const Patient = new patient(Data);
    Patient.save();
    response.send("patient data saved successfully")
}


exports.getpatientdata = async(request,response) => {
    const prescriptiondata = await patient.find()
    response.send(JSON.stringify({"status":200, "error": "", "message": prescriptiondata }))
}


exports.getsinglepatientdata = async(request,response) => {
    const singleprescriptiondata = await patient.find({drid:request.params.id });
    response.send(JSON.stringify({"status":200, "error": "", "message": singleprescriptiondata }))
}


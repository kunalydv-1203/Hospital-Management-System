const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/clinicdata");

const treatmentschema = {
    pfullname : String,
    pmobileno : String,
    pgender : String,
    page : String,
    psymptoms : String,
    ptreatment : String,
    drname:String,
    drid: String
}

const patient = mongoose.model("patient", treatmentschema)


module.exports = patient;
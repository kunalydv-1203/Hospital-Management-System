const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/clinicdata");

const doctorsschema = {
    drfirstname : String,
    drlastname : String,
    drmobileno : String,
    drmedicallic : String,
    dremail : String,
    drgender : String,
    drpassword : String,
    drspeciality:String,
    drqualification:String,
    drawards:String,
    drmembership:String,
    drblog:String,
    fileimage:String
};



const doctor = mongoose.model("doctor", doctorsschema)

module.exports = doctor;

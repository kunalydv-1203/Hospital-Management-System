const multer = require('multer')

const doctor = require('../config/mongodb_config')

exports.doctorregistration = (request,response) => {
    const registrationData = {
        
        drfirstname :request.body.drfirstname,
        drlastname : request.body.drlastname,
        drmobileno : request.body.drmobileno,
        drmedicallic : request.body.drmedicallic,
        drgender:request.body.drgender,
        dremail : request.body.dremail,
        drpassword : request.body.drpassword,
  
    }

    const Doctor = new doctor(registrationData);
    Doctor.save();
    response.send('doctors data saved succesfully')
}

exports.doctorlist = async(request,response) => {
    const alldoctors = await doctor.find()
    response.send(JSON.stringify({"status":200, "error": "", "message": alldoctors }))
}

exports.singledoctorlist = async(request,response) => {
    const singledoctor = await doctor.findById(request.params.id);
    response.send(JSON.stringify({"status":200, "error": "", "message": singledoctor }))
}

exports.doctordelete = async(request,response) => {
    const drdelete = await doctor.findByIdAndDelete(request.params.id);
    response.send(JSON.stringify({"status":200, "error": "", "message": drdelete }))
}

exports.doctorupdate = async(request,response) => {

    const registrationData = {
        drfirstname :request.body.drfirstname,
        drlastname : request.body.drlastname,
        drmobileno : request.body.drmobileno,
        drmedicallic : request.body.drmedicallic,
        dremail : request.body.dremail,
        drspeciality:request.body.drspeciality, 
        drqualification:request.body.drqualification,
        drawards:request.body.drawards,
        drmembership:request.body.drmembership,
        drblog:request.body.drblog,
        fileimage:request.file.path
    }


    const drupdate = await doctor.findByIdAndUpdate(request.params.id,registrationData);
    response.send(JSON.stringify({"status":200, "error": "", "message": drupdate }))
}


exports.doctorlogin = async(request,response) => {
    const alldoctors = await doctor.findOne({dremail:request.body.dremail})
    if(request.body.drpassword == alldoctors.drpassword){
        response.send(JSON.stringify({"status":200, "error": "", "message":  alldoctors }))
    } else{
        response.send(JSON.stringify({"status":200, "error": "", "message": "Wrong Mail or Password "}))
    }
}

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads')
    },
    filename:function(req,file,cb){cb(null,file.originalname)}
})

exports.imageupload = multer({storage:storage}).single('fileimage')
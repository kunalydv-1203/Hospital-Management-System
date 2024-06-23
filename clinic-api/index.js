const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
const port = 1208;

app.use(express.json());
app.use("/doctor",require('./routes/doctorroutes'));
app.use("/prescription",require('./routes/patientroutes'));

app.listen(port,(error) => {
    if(error){
        console.log(error)
    }else{
        console.log(`server has started at ${port}`)
    }
})
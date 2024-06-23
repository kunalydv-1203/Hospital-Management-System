import '../css/drprescription.css'
import { useState} from 'react';
import axios from 'axios';
import{useNavigate} from 'react-router-dom'


  

const DrPrescription = () => {

    const[pfullname,getpfullname] = useState("")
    const[pmobileno,getpmobileno] = useState("")
    const[page,getpage] = useState("")
    const[pgender,getpgender] = useState("")
    const[psymptoms,getpsymptoms] = useState("")
    const[ptreatment,getptreatment] = useState("")

    const handlefullname = (event) => {
        getpfullname(event.target.value)
    }

    const handlemobileno = (event) => {
        getpmobileno(event.target.value)
    }

    const handleage = (event) => {
        getpage(event.target.value)
    }

    const handlegender = (event) => {
        getpgender(event.target.value)
    }

    const handlesymptoms = (event) => {
        getpsymptoms(event.target.value)
    }

    const handletreatment = (event) => {
        getptreatment(event.target.value)
    }

    const navigate = useNavigate();
    
    const TsubmitHandler = (event) => {

        const drname = localStorage.getItem('drfirstname');
        const drid = localStorage.getItem('id');
    

        let formdata = {pfullname:pfullname,pmobileno:pmobileno,page:page,pgender:pgender,psymptoms:psymptoms,ptreatment:ptreatment,drname:drname,drid:drid }
        axios.post('http://localhost:1208/prescription/prescriptionform',formdata).then((response)=>{
            console.log(response)})
            navigate('/prescriptiondata')
    }

    

    return(
        <>
             <div className="page2">
                <div className="prescription">
                    <h2 id="hfive">PRESCRIPTION FORM</h2>
                    <form action="#" className="frm3">
                        <div className="f1">
                            <div className="f11">
                              <div className="fd1">
                                <label > FULL NAME</label> <br />
                                <input type="text" className='inp' value={pfullname} onChange={handlefullname} placeholder='FULL NAME' />
                               </div>

                              <div className="fd2">
                                <label > MOBILE NO.</label> <br />
                                <input type="number"  className='inp' value={pmobileno} onChange={handlemobileno} placeholder='MOBILE NO.' />
                               </div>
                            </div>

                           <div className="f12">
                                <div className="fd1">
                                 <label > Age</label> <br />
                                 <input type="number" className='inp' value={page} onChange={handleage} placeholder='AGE' />
                                </div>

                            <div className="fd2">
                                <label > GENDER</label> <br />
                                <select id="gender"  className='inp' value={pgender} onChange={handlegender} name="gender">
                                <option value="male">MALE</ option>
                                <option value="female">FEMALE</option> 
                                <option value="other">OTHER</option>
                                </select>
                            </div>
                          </div>
                        </div>

                        <div className="f2">
                            <label> SYMPTOMS</label>
                        <textarea name="symptoms
                        " id="blg" value={psymptoms} onChange={handlesymptoms}></textarea>
                        </div>

                        <div className="f3">
                        <label> TREATMENT</label>
                        <textarea name="treatment
                        " id="blg" onChange={handletreatment} value={ptreatment}></textarea>
                        </div>

                        <button className='btnfour' onClick={TsubmitHandler}>TREATMENT</button>

                    </form>
                </div>
             </div>
        </>        
    )
}   

export default DrPrescription
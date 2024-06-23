import '../css/logregi.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const LogRegi = () => {
    const location = useLocation();
    const navigate = useNavigate();
    

    console.log(location.pathname)

    const [formName, getformName] = useState("REGISTRATION");
    const [formBtn, getformBtn] = useState("REGISTRATION");
    const [formparatwo, getformparatwo] = useState("Already have an Account ?");
    const [formparaone, getformparaone] = useState("Enter your details to make an Account.");
    const [formBtnR, getformBtnR] = useState("Login");

    useEffect(() => {
        if (location.pathname === "/drlogin") {
            getformName("LOGIN");
            getformBtn("LOGIN");
            getformparatwo("Don't have an Account ?")
            getformparaone("Enter your Email and Password to access your Account.")
            getformBtnR("Registration")
        } else {
            getformName("REGISTRATION");
            getformBtn("REGISTRATION");
            getformparatwo("Already have an Account ?")
            getformparaone("Enter your details to make an Account.")
            getformBtnR("LOGIN")
        }
    }, [location.pathname])

    const [drfirstname, getdrfirstname] = useState("")
    const [drlastname, getdrlastname] = useState("")
    const [drmobileno, getdrmobileno] = useState("")
    const [drmedicallic, getdrmedicallic] = useState("")
    const [dremail, getdremail] = useState("")
    const [drpassword, getdrpassword] = useState("")
    const [drgender, getdrgender] = useState("")

    const handledrfirstname = (event) => {
        getdrfirstname(event.target.value)
    }

    const handledrlastname = (event) => {
        getdrlastname(event.target.value)
    }

    const handledrmobileno = (event) => {
        getdrmobileno(event.target.value)
    }

    const handledrmedicallic = (event) => {
        getdrmedicallic(event.target.value)
    }

    const handledremail = (event) => {
        getdremail(event.target.value)
    }

    const handledrpassword = (event) => {
        getdrpassword(event.target.value)
    }

    const handledrgender = (event) => {
        getdrgender(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if (formBtn === "REGISTRATION") {
            let formdata = {
                drfirstname: drfirstname,
                drlastname: drlastname,
                drmobileno: drmobileno,
                drmedicallic: drmedicallic,
                dremail: dremail,
                drpassword: drpassword,
                drgender: drgender
            }
            axios.post('http://localhost:1208/doctor/drregistration', formdata).then((response) => {
                console.log(response)
            })
            navigate('/drlogin')
        } else if (formBtn === "LOGIN") {
            let formdata = { dremail: dremail, drpassword: drpassword }
            axios.post('http://localhost:1208/doctor/drlogin', formdata).then((response) => {
                console.log(response.data.message._id)

                localStorage.setItem("id", response.data.message._id)
                localStorage.setItem("drfirstname", response.data.message.drfirstname)
                localStorage.setItem("dremail", response.data.message.dremail)

                navigate('/prescription')
            })
        }
    }

    return (
        <>
            <div className="form">
                <form className='frm1' action="#">
                    <h5 className="hfive">{formName}</h5>
                    <p className="pfive">{formparaone}  </p>

                    {formBtn !== "LOGIN" &&
                        <>
                            <div className="info">
                                <div className="name">
                                    <label> First Name</label> <br />
                                    <input className='one' type="text" value={drfirstname} onChange={handledrfirstname} placeholder="First Name" />
                                </div>

                                <div className="name">
                                    <label> Last Name</label> <br />
                                    <input className='one' type="text" value={drlastname} onChange={handledrlastname} placeholder="Last Name" />
                                </div>
                            </div>

                            <br />

                            <div className="info">
                                <div className="inf">
                                    <label> Gender</label> <br />
                                    <label >
                                        <input type="radio" name='gender' value='Male' checked={drgender === 'Male'} onChange={handledrgender} />
                                        MALE</label>
                                    &nbsp;        &nbsp;
                                    <label >
                                        <input type="radio" name='gender' value='Female' checked={drgender === 'Female'} onChange={handledrgender} />
                                        FEMALE</label>
                                </div>

                                <div className="inft">
                                    <label> Mobile no.</label> <br />
                                    <input className='one' value={drmobileno} onChange={handledrmobileno} type="text" placeholder="Mobile No." />
                                </div>
                            </div>

                            <br />

                            <div className="license">
                                <label > Medical License No.</label> <br />
                                <input className='two' type="text" value={drmedicallic} onChange={handledrmedicallic} placeholder='ABZ4525' />
                            </div>
                        </>
                    }

                    <br />

                    <div className="main">
                        <label > Email</label> <br />
                        <input className='two' type="email" value={dremail} onChange={handledremail} placeholder='email@example.com' />

                        <br /> <br />

                        <label > Password</label>
                        {formBtn !== "REGISTRATION" &&
                            <>
                                <span id='sone'>Forgot Password ?</span> </>}  <br />
                        <input className='two' type="password" value={drpassword} onChange={handledrpassword} />
                    </div>

                    <br />

                    <button className="btnthree" onClick={submitHandler} > {formBtn} </button>

                    <p className="psix">{formparatwo} <span id='stwo' onClick={() => { navigate('/drlogin') }}>{formBtnR}</span></p>
                </form>
            </div>
        </>
    )
}

export default LogRegi;

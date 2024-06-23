import '../css/drprofile.css'
import axios from 'axios'
import { useState, useEffect } from 'react';

const DrProfile = () => {
    const [drfirstname, getdrfirstname] = useState("");
    const [drmobileno, getdrmobileno] = useState("");
    const [drmedicallic, getdrmedicallic] = useState("");
    const [drspeciality, getdrspeciality] = useState("");
    const [drqualification, getdrqualification] = useState("");
    const [drawards, getdrawards] = useState("");
    const [drmembership, getdrmembership] = useState("");
    const [drblog, getdrblog] = useState("");
    const [fileimage,getFileimage] = useState({ preview:'', data:''})

    useEffect(() => {
        const id = localStorage.getItem("id");

        axios.get('http://localhost:1208/doctor/singledrlist/' + id)
            .then((response) => {
                const data = response.data.message;
                getdrfirstname(data.drfirstname);
                getdrmedicallic(data.drmedicallic);
                getdrmobileno(data.drmobileno);
                getdrspeciality(data.drspeciality);
                getdrqualification(data.drqualification);
                getdrawards(data.drawards);
                getdrmembership(data.drmembership);
                getdrblog(data.drblog);
                getFileimage(data.fileimage)
            });
    }, []);

    const handledrfirstname = (event) => {
        getdrfirstname(event.target.value);
    };

    const handledrmobileno = (event) => {
        getdrmobileno(event.target.value);
    };

    const handledrmedicallic = (event) => {
        getdrmedicallic(event.target.value);
    };

    const handledrspeciality = (event) => {
        getdrspeciality(event.target.value);
    };

    const handledrqualification = (event) => {
        getdrqualification(event.target.value);
    };

    const handledrawards = (event) => {
        getdrawards(event.target.value);
    };

    const handledrmembership = (event) => {
        getdrmembership(event.target.value);
    };

    const handledrblog = (event) => {
        getdrblog(event.target.value);
    };

    
    
    const handlefile = (e)=>{
        getFileimage({preview:URL.createObjectURL(e.target.files[0]),data:e.target.files[0]});
    }

    const updatehandler = async(event) => {
        event.preventDefault();

        const id = localStorage.getItem("id");

         let formData = new FormData();

         formData.append('fileimage',fileimage.data)
         formData.append('drfirstname',drfirstname)
         formData.append('drmobileno',drmobileno)
         formData.append('drspeciality',drspeciality)
        //  formData.append('drmedicallic',drmedicallic)
         
   
         formData.append('drqualification',drqualification)
         formData.append('drawards',drawards)
         formData.append('drmembership',drmembership)
         formData.append('drblog',drblog)

          
const response = await fetch('http://localhost:1208/doctor/drupdate/'+id,{
    method: 'PUT',
    body: formData,
})
    };

    return (
        <>
            <div className="page">
                <div className="profile">
                    <form className='frm2' action="#">
                        <div className="d1">
                         <div className="drimg">
                            <img src={fileimage.preview} width='100' height='100'/>
                            <input type="file" id='upimg' name="file" onChange={handlefile}/>
                            </div>
                            
                            <div className="pinf">
                                <div className="pd1">
                                    <label className='lbl'> FULL NAME </label>
                                    <br />
                                    <input type="text" name='drfirstname' className='inp' value={drfirstname} onChange={handledrfirstname} placeholder='DOCTORS FULL NAME' />
                                </div>

                                <div className="pd1">
                                    <label className='lbl'> Mobile No. </label>
                                    <br />
                                    <input type="text" className='inp' value={drmobileno} name='drmobileno' onChange={handledrmobileno} placeholder='Mobile number' />
                                </div>
                            </div>

                            <div className="pinf">
                                <div className="pd1">
                                    <label className='lbl'> SPECIALITY </label>
                                    <br />
                                    <input type="text" value={drspeciality} name='drspeciality' className='inp' onChange={handledrspeciality} placeholder='DOCTORS SPECIALITY' />
                                </div>

                                <div className="pd1">
                                    <label className='lbl'> MEDICAL LICENSE NO. </label>
                                    <br />
                                    <input type="text" className='inp' value={drmedicallic} name='drmedicallic' onChange={handledrmedicallic} placeholder='ABZ2545' />
                                </div>
                            </div>
                        </div>

                        <div className="d2">
                            <div className="parts">
                                <label className='lbl'> QUALIFICATIONS</label>
                                <br />
                                <textarea name="qualification" className='txtarea' value={drqualification} onChange={handledrqualification}></textarea>
                            </div>

                            <div className="parts">
                                <label className='lbl'> AWARDS AND HONORS</label>
                                <br />
                                <textarea name="awardsandhonours" className='txtarea' onChange={handledrawards} value={drawards}></textarea>
                            </div>

                            <div className="parts">
                                <label className='lbl'> PROFESSIONAL MEMBERSHIPS</label>
                                <br />
                                <textarea name="professionalmembership" className='txtarea' value={drmembership} onChange={handledrmembership}></textarea>
                            </div>
                        </div>

                        <div className="d3">
                            <label className='lbl'> BLOG</label> <br />
                            <textarea name="dr.blog" value={drblog} onChange={handledrblog} id="blg"></textarea>
                        </div>

                        <button className='btnthree' onClick={updatehandler}> UPDATE PROFILE </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default DrProfile;

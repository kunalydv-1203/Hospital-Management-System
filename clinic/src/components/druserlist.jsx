import'../css/drtable.css'
import { useEffect , useState} from "react"

import axios from "axios";

const DrUserlist = () => {

    const[userData, getuserData] = useState('')

const alldrlist = () => {
    axios.get('http://localhost:1208/doctor/drlist').then((response)=>{
        getuserData(response.data.message)
    })
}

useEffect(()=>{
    alldrlist();
},[])

    return(
        <>
           <div className="tablepageone">
           <h1 id='hsix'>DOCTOR REGISTRATION DATA</h1>
            <table border="2" className="drtable">

         
                <thead>
                <tr>
                    <th> DOCTORS ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>GENDER</th>
                    <th>SPECIALITY</th>
                    <th>MOBILE NO.</th>
                    <th>MEDICAL LICENSE NO.</th>
                    <th>EMAIL</th>
                    <th>QUALIFICATION</th>
                    <th>AWARDS AND HONOURS</th>
                    <th>MEDICAL MEMBERSHIP</th>
                    <th>BLOG</th>
                  
                
                </tr>
                </thead>

                {userData && userData.map((doctors) => (
                  <tbody>
                      <tr>
                        <td>{doctors._id}</td>                    
                        <td>{doctors.drfirstname}</td>                    
                        <td>{doctors.drlastname}</td>   
                        <td> </td>          
                        <td>{doctors.drspeciality}</td>       
                        <td>{doctors.drmobileno}</td>                    
                        <td>{doctors.drmedicallic}</td>                    
                        <td>{doctors.dremail}</td>           
                        <td>{doctors.drqualification}</td>  
                        <td>{doctors.drawards}</td>  
                        <td>{doctors.drmembership}</td>  
                        <td>{doctors.drblog}</td>  
                                   
                                     
                    </tr>
                  </tbody>


                ))}
            </table>
           </div>
        </>
    )
}

export default DrUserlist
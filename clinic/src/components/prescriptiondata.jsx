import'../css/drtable.css'
import { useEffect , useState} from "react"

import axios from "axios";

const PrescriptionData = () => {
   
        const[userData, getuserData] = useState('')

        const allpatientlist = () => {

            const drid = localStorage.getItem('id');

            axios.get('http://localhost:1208/prescription/singleprescriptiondata/'+drid).then((response)=>{
                getuserData(response.data.message)
            })
        }
        
        useEffect(()=>{
            allpatientlist();
        },[])

       
            return(
                <>
                   <div className="tablepageone">
                   <h1 id='hsix'>PATIENTS MEDICAL DATA</h1>
                    <table border="2" className="drtable">
        
                 
                        <thead>
                        <tr>
                            <th> DOCTOR ID</th>
                            <th>DOCTOR NAME</th>  
                            <th>PATIENT NAME</th>
                            <th>MOBILE NO</th>
                            <th>GENDER</th>
                            <th>AGE</th>
                            <th>SYMPTOMS</th>
                            <th>TREATMENT</th>
                        </tr>
                        </thead>
        
                        {userData && userData.map((patients) => (
                          <tbody>
                              <tr>
                                <td>{patients.drid}</td>    
                                <td>{patients.drname}</td>                     
                                <td>{patients.pfullname}</td>  
                                <td>{patients.pmobileno}</td>   
                                <td>{patients.pgender}</td>                    
                                <td>{patients.page}</td>                    
                                <td>{patients.psymptoms}</td>                    
                                <td>{patients.ptreatment}</td>                    
                                             
                            </tr>
                          </tbody>
        
        
                        ))}
                    </table>
                   </div>
                </>
    )
}

export default PrescriptionData
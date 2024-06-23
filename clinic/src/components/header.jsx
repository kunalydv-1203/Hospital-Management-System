import '../css/header.css'
import { useNavigate,useLocation } from 'react-router-dom'

const Header = () => {
     const navigate = useNavigate()
     const location =useLocation()

        const drName = localStorage.getItem('drfirstname')

     const logout = () => {
                    localStorage.clear();
                    navigate('/')
     }
    return(

     
        <>
            <nav>
                <div className="logo">
                    <img src="http://localhost:3000/logo2.png" alt="logo" />
                    <h2 id='logotext'>MEDICARE CLINIC</h2>
                </div>

              <div className="options"> 
                <ul>
                    <li><a onClick = {()=>{navigate('/')}}>Home</a></li>
                    {/* <li><a onClick={()=> {navigate('/contact')}} >Contact</a></li> */}

                    {location.pathname != '/drprofile' &&  location.pathname != '/prescription' && location.pathname != '/prescriptiondata' && 
                        <>
                  <li><a onClick={()=> {navigate('/drlogin')}}>Login</a></li>
                  <li><a onClick={()=> {navigate('/drregistration')}}>Registration</a></li>
                   </>
                    }

                   {location.pathname != '/' && location.pathname != '/drlogin' && location.pathname != '/drregistration' && location.pathname != '/contact' && 
                   <>
                    <li><a onClick={()=> {navigate('/drprofile')}}>Profile</a></li>
                    <li><a onClick={()=> {navigate('/prescription')}}>Prescription Form</a></li>
                    <li><a onClick={()=> {navigate('/prescriptiondata')}}>Patient List</a></li>
                  </>
                   }

                    { location.pathname != '/' && location.pathname != '/contact' && location.pathname != '/drlogin' && location.pathname != '/drregistration' && 
                   <>
                    <li> <a id='logout' onClick={logout} >{drName}(Logout)</a></li>
                   </>
                    }

                </ul>
              </div>
            </nav>
        </>
    )
} 

export default Header
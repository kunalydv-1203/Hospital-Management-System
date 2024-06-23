import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/homepage';
import LandRPage from './pages/lrpage';
import DrProfilePage from './pages/drprofilepage';
import Prescription from './pages/prescriptionpage';
import DrListPage from './pages/druserlistpage';
import PrescriptionDataPage from './pages/prescriptiondatapage';
import ImagePage from './pages/image';
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element = {<HomePage/>}  />
            <Route path='/drlogin' element = { <LandRPage/>} />
            <Route path='/drregistration' element = { <LandRPage/>} />
            <Route path='/drprofile' element = {<DrProfilePage/>} />
            <Route path='/prescription' element = {<Prescription/>}/>
            <Route path='/druserlist' element = {<DrListPage/>}/>
            <Route path='/prescriptiondata' element = {<PrescriptionDataPage/>}/>
            <Route path='/drimage' element = {<ImagePage/>}/>
        </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;

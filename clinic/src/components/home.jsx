import '../css/home.css'

const Home = () => {
    return(
        <>
           <div className="container">
           <div className="bg">
                {/* <img src="http://localhost:3000/bg.jpg" alt="" /> */}

                <div className="text">
                    <div className="head">
                        <h1 className='hone'>Welcome to Medicare Clinic</h1>
                        <h3 className="htwo">Where Compassionate Care Meets Medical Excellence</h3>

                        <p className="pone">At Medicare Clinic, we are dedicated to providing exceptional  healthcare
                        services tailored to meet the unique needs of each patient. With a
                        focus on preventive care, diagnosis, and treatment, our experienced
                        team of healthcare  professionals is committed to your well-being.</p>

                        <p className="ptwo">
                            To Know More About Us <button className='btnone'> Click Me </button>
                        </p>
                    </div>
                </div>


            </div>

            <div className="cards">
                <div className="card">
                   <div className="pn">
                    <img src="http://localhost:3000/c2.jpeg" alt="" /> <span>2548</span>  
                    </div>

                    <p className='paraone'>TOTAL APOINTMENT</p>

                    <p className="paratwo">we have conducted more than 2000 appointments and keep counting...</p>

                </div>

                <div className="card">
                <div className="pn">
                    <img src="http://localhost:3000/c3.png" alt="" /> <span>18</span>  
                </div>

                    <p className='paraone'>TODAY'S APOINTMENT</p>

                    <p className="paratwo">It shows people's trust on us.</p>
                </div>

                <div className="card">
                <div className="pn">
                    <img src="http://localhost:3000/c1.jpeg" alt="" /> <span>1158</span>  
                    </div>

                    <p className='paraone'>TOTAL PATIENT</p>

                    <p className="paratwo">we have treated more than 1000 patient</p>
                </div>
            </div>

            <div className="section">
           <h1 className='hthree'> GIVE US A CHANCE TO HELP YOU </h1>

            <p className="pthree"> Ready to experience personalized healthcare designed with you in mind? Contact us today to schedule
            an appointment. Your health is our priority, and we look forward to serving you.
            </p>

                

            <p className="pfour">Book An Appointment Now <button className="btnone"> Click me </button></p>




            </div>

           </div>
        </>
    )
} 
export default Home
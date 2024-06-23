const { default: Footer } = require("../components/footer")
const { default: Header } = require("../components/header")
const { default: PrescriptionData } = require("../components/prescriptiondata")

const PrescriptionDataPage = () => {
    return(
        <>
            {<Header/>}
            {<PrescriptionData/>}
            {<Footer/>}
        </>
    )
}

export default PrescriptionDataPage
import { useState } from "react"

const ImageUpload = () => {
    
    const [fileimage,getFileimage] = useState('')
    
    const handlefile = (e)=>{
        getFileimage(URL.createObjectURL(e.target.files[0]))
    }
    return(
        <>

        <form>
            <input type="file" name="file" onChange={handlefile}/>
        </form>
        <img src={fileimage} width={300} height={300}/>
        </>
    )
}

export default ImageUpload
import React from 'react'
import spinnerImage from './../images/spinner.gif'



const styleSpinner = {
    display:"flex",
    justifyContent:"center",
    alignItems:'center'
}
const Spinner = () => {
    return (
        <div style={styleSpinner}>
            <img src={spinnerImage} alt="Spinner loading"/>
        </div>
    )
}

export default Spinner

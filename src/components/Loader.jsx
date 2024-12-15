import React from "react"
import { BarLoader } from "react-spinners"

const Loader =()=> {
    return(
        <div className="loader">
            <BarLoader height={4} width={300} className="barLoader"/>
        </div>
    )
}

export default Loader
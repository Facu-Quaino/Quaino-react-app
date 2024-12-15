import React from "react"
import { BarLoader } from "react-spinners"

const Loader =()=> {
    return(
        <div className="loader">
            <BarLoader height={6} width={400} className="barLoader"/>
        </div>
    )
}

export default Loader
import React, { GlobalStore } from '../App'
import { useEffect, useState, useContext,createContext } from 'react'


const Accessories = () => {
    const { appColor1, appColor2 , message , message2 , textColor } = useContext(GlobalStore)
    return (
        <div className="cootanier">
                <>Here I m useing Use context</>
                <div className="row">
                    <div className=" col-5 m-1" style={{backgroundColor:appColor1}}>
                        <p style={{color:textColor}}>
                            {message}
                        </p>
                    </div>
                    <div className="col-5 p-2 m-1" style={{backgroundColor:appColor2}}>
                        <p style={{color:textColor}}>
                            {message2}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Accessories
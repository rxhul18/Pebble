// import React, { GlobalStore } from '../App'
// import { useEffect, useState, useContext,createContext } from 'react'
import CommonCard from '../Components/CommonProCard'
import AccessoirsApi from '../api/Accessoirs/AccessoirsApi'

const Accessories = () => {
    // const { appColor1, appColor2 , message , message2 , textColor } = useContext(GlobalStore)
    return (

        <div className="cootanier main-page">
            <h2 className='m-3'>Accessories</h2>
            {/* <DigitalWatchCard /> */}
            <CommonCard apiData={AccessoirsApi} />
        </div>
        // <div className="cootanier">
        //         <>Here I m useing Use context</>
        //         <div className="row">
        //             <div className=" col-5 m-1" style={{backgroundColor:appColor1}}>
        //                 <p style={{color:textColor}}>
        //                     {message}
        //                 </p>
        //             </div>
        //             <div className="col-5 p-2 m-1" style={{backgroundColor:appColor2}}>
        //                 <p style={{color:textColor}}>
        //                     {message2}
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
    )
}

export default Accessories
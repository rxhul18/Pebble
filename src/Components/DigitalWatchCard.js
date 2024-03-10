import './SCSS/DigitalWactchCard.scss'
import digitalWatchApi from '../api/WatchPage/DigitalWatchesApi'

function DigitalWatchCard() {
    return(
        <div className='row coontainer'>
        {digitalWatchApi.map((data)=>{
        return(
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 pb-4" style={{padding:"0 9px"}}> 
                <div className='main-launch rounded-3'>
                <div className="launchCard rounded-3">
                    {data.specialOffer && <p className="comman-child common-font mt-3">{data.offer}</p>}
                    <img  className="img-fluid mx-auto comman-parent rounded-4 mb-3 mt-2" src={data.mainImgUrl}  alt="kuch nhi"/>

                    <div className="d-flex multiphoto px-2">
                        <div className="col-3 col-md-2 col-lg-3 imgdiv">
                            <img src={data.poductimg1} className="img-fluid mx-auto p-0" alt="kuch nhi"/>
                        </div>
                        <div className="col-3 col-md-2 col-lg-3">
                            <img src={data.poductimg2} className="img-fluid mx-auto p-0" alt="kuch nhi"/>
                        </div>
                        <div className="col-3 col-md-2 col-lg-3">
                            <img src={data.poductimg3} className="img-fluid mx-auto p-0" alt="kuch nhi"/>
                        </div>
                    </div>

                    <div className="product-info px-2">
                        <h2 className="title mt-3">{data.productTitle}</h2>
                        <div className='d-flex features gap-1 mb-2'>
                            <span>{data.feature1}</span> <span>{data.feature2}</span>
                        </div>
                        <h3 className="specification">{data.specification}</h3>
                        <div className="price d-flex">
                            <h2>{data.curPrice}<span className="text-secondary"><del>{data.ogProce}</del></span> <span className="offer">{data.discount}</span></h2>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    })}
        </div>
    )
}

export default DigitalWatchCard;
import './SCSS/CommonProCard.scss'
// import commonApi from '../api/WatchPage/PracticeAPi'

const CommonCard = ({apiData}) => {
    return(
        <div className='row coontainer'>
        {apiData.map((data)=>{
            console.log(data.productArray);
        return(
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 pb-4" id='main-card'> 
                <div className='main-launch rounded-3'>
                <div className="launchCard rounded-3">
                    {data.specialOffer && <p className="comman-child common-font mt-2">{data.offer}</p>}
                    <img  className="img-fluid mx-auto comman-parent rounded-4 mb-3 mt-2" src={data.mainImgUrl}  alt="kuch nhi"/>
                    <div className="d-flex multiphoto px-2 mt-2">
                        <div className="col-3 col-md-2 col-lg-3 imgdiv">
                            {data.productArray[0] && <img src={data.productArray[0]} className="img-fluid mx-auto p-0" alt="kuch nhi"/>}
                        </div>
                        <div className="col-3 col-md-2 col-lg-3">
                            {data.productArray[1] && <img src={data.productArray[1]} className="img-fluid mx-auto p-0" alt="kuch nhi"/>}
                        </div>
                        <div className="col-3 col-md-2 col-lg-3">
                            {data.productArray[2] && <img src={data.productArray[2]} className="img-fluid mx-auto p-0" alt="kuch nhi"/>}
                        </div>
                    </div>

                    <div className="product-info px-2">
                        <h2 className="title mt-3">{data.productTitle}</h2>
                        <div className='d-flex features gap-1 mb-2'>
                            {data.feature1 && <span>{data.feature1}</span>} {data.feature2 && <span>{data.feature2}</span>}
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

export default CommonCard;
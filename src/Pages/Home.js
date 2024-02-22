import './SCSS/common.scss';
import './SCSS/home.scss';
// import pressNews from '../Components/NewsPress';
import productVideoApi from '../api/HomePage/productVideoApi';
import carosouleImg1 from '../Assets/homePage/carosalle/image1.webp'
import carosouleImg3 from '../Assets/homePage/carosalle/image3.webp'
import exploreApi from '../api/HomePage/exploreCollectionApi'
import newLaunches from '../api/HomePage/newLaunches'
import expPebble from '../api/HomePage/expPebble';
import press from '../api/HomePage/press';
// import offPartnerApi from '../api/HomePage/offPartnerApi';
import giftingVideo from '../Assets/homePage/video/giftingVid.mp4'
import Footer from '../Components/Footer';

function Home(params) {
   return(
    <div className=" main-wrapper">
        <div className='coontainer part-1'>

            <div id="carouselExampleIndicators" className="carousel slide mt-caro" data-bs-ride="true">
                <div className="carousel-indicators gap-3">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"//cdn.shopify.com/s/files/1/0577/6785/4123/files/WhatsApp_Image_2023-03-09_at_21.15.49_1.jpg?v=1678428060"} className="d-block w-100 rounded-4" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carosouleImg1} className="d-block w-100 rounded-4" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carosouleImg3} className="d-block w-100 rounded-4" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>  

            <h2 className="exploreColl">Explore Collections</h2>

            <div className="row my-3">
                {exploreApi.map((data)=>{
                    return(
                        <div className="col-6 col-lg-3 justify-content-center d-flex  mt-4 text-center mt-3">
                            <div className="main-card text-center">
                                <a href="kuchnhi">
                                <img className='w-100' src={data.img} alt="kuch nhi"/>
                                </a>
                                <h3 className="mt-2 mb-4">{data.productName}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>

            <h2>New Launches</h2>



            <div className='row newLaunches mt-5'>

                {newLaunches.map((data)=>{
                    return(
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 pr-0">
                            <div className="launchCard rounded-3">
                                {data.specialOffer && <p className="comman-child common-font">{data.offer}</p>}
                                <img  className="img-fluid mx-auto comman-parent rounded-4 mb-3" src={data.mainImgUrl}  alt="kuch nhi"/>

                                <div className="d-flex">
                                    <div className="col-3 col-md-2 col-lg-2">
                                        <img src={data.opcolorImg1} className="img-fluid mx-auto p-0" alt="kuch nhi"/>
                                    </div>
                                    <div className="col-3 col-md-2 col-lg-2">
                                        <img src={data.opcolorImg2} className="img-fluid mx-auto p-0" alt="kuch nhi"/>
                                    </div>
                                    <div className="col-3 col-md-2 col-lg-2">
                                        <img src={data.opcolorImg3} className="img-fluid mx-auto p-0" alt="kuch nhi"/>
                                    </div>
                                </div>

                                <div className="product-info">
                                    <h2 className="title mt-3">{data.productTitle}</h2>
                                    <h3 className="specification">{data.specification}</h3>
                                    <div className="price d-flex">
                                        <h2>{data.curPrice}<span className="text-secondary"><del>{data.ogProce}</del></span> <span className="offer">{data.discount}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>

        <div className='ratingAndMore border-top border-bottom mb-4'>
            <div className='row coontainer mt-5 mb-4'>
                <div className='col-4 d-flex fd-c'>
                    <img src='//cdn.shopify.com/s/files/1/0577/6785/4123/files/1_unit_sold.gif?v=1668739055&width=80' alt="kuch nhi" className='justify-content-center img-fluid m0-a'/>
                    <span  className='text-center upper-one'>
                        4 Units Sold
                        <br/>
                        Every Minute
                    </span>
                </div> 
                <div className='col-4 d-flex fd-c'>
                    <img src='//cdn.shopify.com/s/files/1/0577/6785/4123/files/2mn_producr_reviews.gif?v=1668739055&width=80'alt="kuch nhi" className='justify-content-center img-fluid m0-a'/>
                    <span  className='text-center upper-one'>
                        4.3+ Rated
                        <br/>
                        Products
                    </span>
                </div>
                <div className='col-4 d-flex fd-c'>
                    <img src='//cdn.shopify.com/s/files/1/0577/6785/4123/files/happy.gif?v=1670306925&width=80'alt="kuch nhi" className='justify-content-center img-fluid m0-a'/>
                    <span  className='text-center upper-one'>
                        10 Mn+ Happy
                        <br/>
                        Customers
                    </span>
                </div>
            </div>
        </div>

        <div className="coontainer part-2">
            <div className="cosmosgrande-card">
                <div className="row">
                    {productVideoApi.map((data)=>{
                        return(
                            <div className='productVideoApi border-bottom my-4'>
                                <h2>{data.wtcName}</h2>
                                <div className='d-flex row'>
                                    <div className='col-md-6 col-sm-12 col-12 video-part'>
                                        <video src={data.videoUrl} controls></video>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-12 mt-3 d-flex align-items-center content-part">
                                        <div className='col-md-5 col-sm-5 col-5 p-3'>
                                            <img src={data.imageUrl} className='img-fluid' alt='nothing'/>
                                        </div>
                                        <div className='col-md-7 col-sm-7 col-7 d-block'>
                                            <div className='upper-part'>
                                                <h3 className='title'>{data.h3Title}</h3>
                                                <p>{data.para}</p>
                                                <p className='mt-2'>{data.review}</p>
                                            </div>
                                            <div className='lower-part mt-5 price'>
                                                <h2>{data.cPrice} <span className="text-secondary"><del>{data.ogPrice}</del></span> <span className="offer">{data.offer}</span></h2>
                                                <button className='mt-2'>BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        <div className='coontainer expPebble border-bottom pb-3'>
            <h2 className='mb-3' style={{fontFamily:"var(--secondFont)"}}>Experience Pebble</h2>
            <div className='row'>
                {expPebble.map((data)=>{
                   return(
                    <div className='col-md-2 col-sm-4 col-4 d-flex fd-c'>
                        <img src={data.imgSrc} className='justify-content-center img-fluid m0-a' alt='nothing'/>
                        <h2 className='text-center upper-one mb-4'>
                        <span>{data.span1}<br />{data.sapn2}</span>
                        </h2>
                    </div>
                   ) 
                })}
            </div>
        </div>

        {/* Press Section */}
        <div className='press border-bottom'>
            <div className='row d-flex coontainer'>
            <h2 className="exploreColl mt-4">In The Press</h2>
            {press.map((data)=>{
                return(
                    <img src={data.imgSrc} alt='nothnig ' className='img-fluid col-md-4 col-md-4 rounded p-3' />
                )
            })}
            <p>Tiger Shroff grooves with 'Zen Mode On' for Pebble, ET BrandEquity (Indiatimes.com), <a href="https://brandequity.economictimes.indiatimes.com/news/advertising/tiger-shroff-grooves-with-zen-mode-on-for-pebbles-new-ad/94245519">read more..</a></p>
            </div>
        </div>


        {/* Gifting Section */}
        <div className='gifting border-bottom'>
            <div className='coontainer'>
            <h2 className="exploreColl mt-4">Pebble Gifting Edition</h2>
            <video src={giftingVideo} controls className='rounded-4'></video>
            </div>
        </div>

        <Footer />
    </div>
   )
}
export default Home;
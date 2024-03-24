import CommonCard from '../Components/CommonProCard';
import HeadphoneApi from '../api/Earphone/HeadphonesApi'

function Earphone(params) {
    return(
        <div className="cootanier main-page">
            <h2 className='m-3'>Headphones</h2>
            {/* <DigitalWatchCard /> */}
            <CommonCard apiData={HeadphoneApi}/>
        </div>
    )
}

export default Earphone;
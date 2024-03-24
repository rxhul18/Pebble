import '../common.scss'
import './SCSS/Smartwatch.scss'
import DigitalWatchesApi from '../api/WatchPage/DigitalWatchesApi';
import CommonCard from '../Components/CommonProCard';

function smartwatches(params) {
    return(
        <div className="cootanier main-page">
            <h2 className='m-3'>Digital Smart Watches</h2>
            <CommonCard apiData={DigitalWatchesApi}/>
        </div>
        // <Navbarr />
    )
}

export default smartwatches;
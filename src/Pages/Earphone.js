import CommonCard from '../Components/CommonProCard';
import commonApi from '../api/WatchPage/PracticeAPi'

function Earphone(params) {
    return(
        <div className="cootanier">
            <>
            hiii this meassage is from headphone page
            <CommonCard apiData={commonApi} />
            </>
        </div>
        
    )
}

export default Earphone;
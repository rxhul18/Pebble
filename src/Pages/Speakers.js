import CommonCard from "../Components/CommonProCard";
import SpeakerApi from '../api/Speakers/SpeakersApi'

function speakers(params) {
    return(
        <div className="cootanier main-page">
            <h2 className='m-3'>Speakers</h2>
            <CommonCard apiData={SpeakerApi} />
        </div>
    )
}

export default speakers;
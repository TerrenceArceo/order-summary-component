import MusicIcon from '../images/icon-music.svg'

export default function Plan() {
    return (
        <div className="container-plan plan">
            <img src={MusicIcon} alt="Music Icon" className='music-icon'/>
            <div className='price'>
                <h4>Annual Plan</h4>
                <p>$59.99/year</p>
            </div>
            <a className='change-plan' href="#">Change</a>
        </div>
    )
}
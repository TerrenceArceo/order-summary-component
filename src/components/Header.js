import Hero from '../images/illustration-hero.svg'

export default function Header() {
    return (
        <div className='header'>
            <img src={Hero} alt="music icon" className='hero'/>
            <h1 >Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        </div>
    )
}
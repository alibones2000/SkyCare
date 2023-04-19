import phone from'./phone.jpg'
import './Contact.css'

function ContactCards(){
    return(
        <div className="cardsss">
        <h1>Contact</h1>
        <div className="cards___container">
            <div className="cards___wrapper">
                <ul className="cards___items">
                    <ContactCards
                    src={phone}
                    text="718-200-1669"
                    path='/contact'
                    />
                    </ul>
                </div>
                </div>
                </div>
    )
}
export default ContactCards;
import './MailList.css'
// import { Button } from 'react-bootstrap';

function MailList(){
    return(
        <div className='mail'>
            <h1>Become a SkyCare Insider!</h1>
            <span className='mailDesc'>Sign up for notifications!</span>
            <div className='mailInputContainer'>
                <input type='text' placeholder='Your Email'/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default MailList;
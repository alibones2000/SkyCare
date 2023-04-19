import './About.css'
import symbol from './skycare.logo.png'
import './MailList.css'
import MailList from './MailList';

function About(){
    return (
        
        <div className="about-container">
          <div className="background-image" />
          <div className="content-container">
            <h2 className='us'>About Us</h2>
            <img src={symbol} alt="Pharmacy" className="about-image" />
            <div className='layers'>
            <p>
              Our pharmacy is committed to providing our customers with the best possible service and care. We have a team of experienced and knowledgeable pharmacists who are always available to answer any questions you may have about your medications or health concerns. We offer a wide range of prescription medications, over-the-counter products, and health and wellness supplements.
            </p>
            <p>
              At our pharmacy, we believe that everyone deserves access to affordable and high-quality healthcare. That's why we work hard to keep our prices low and our service exceptional. We also offer free home delivery and medication synchronization services to make managing your medications as easy and stress-free as possible.
            </p>
            <p>
              We are dedicated to serving our community and improving the health and wellbeing of our customers. We welcome you to stop by our pharmacy or give us a call to learn more about our services and how we can help you stay healthy.
            </p>
            </div>
        
          </div>
        <MailList/>
        </div>
      );
    }; 

export default About; 


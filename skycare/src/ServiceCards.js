import ServiceCardItems from "./ServiceCardItems";
import delivery from './delivery.png'
import './Services.css'
import shot from './shot.jpg'
import sky3 from './sky3.jpg'
import otc from './otc.jpeg'


function ServiceCards(){
    return(
        <div className="cardss">
            <h1>Services</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <ServiceCardItems
                        src={delivery}
                        text="Express Delivery"
                        path='/services'
                        />
                          <ServiceCardItems
                        src={shot}
                        text="Immunizations"
                        path='/services'
                        />
                          <ServiceCardItems
                        src={sky3}
                        text="Over The Counter"
                        path='/services'
                        />
                           <ServiceCardItems
                        src={otc}
                        text="Otc Accepted"
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ServiceCards; 
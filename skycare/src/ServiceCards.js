import ServiceCardItems from "./ServiceCardItems";
import delivery from './delivery.png'
import './Services.css'
import shot from './shot.jpg'
import sky3 from './sky3.jpg'


function ServiceCards(){
    return(
        <div className="cards">
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
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ServiceCards; 
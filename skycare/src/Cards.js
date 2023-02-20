import React from "react";
import CardItems from "./CardItems";
import './Cards.css'
import pic1 from './Storepic.jpeg'
import pic2 from './skycare2.jpeg'


function Cards(){
    return(
        <div className="cards">
            <h1>Visit Our Locations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems
                        src={pic1}
                        text="2236 Forest Ave"
                        path='/services'
                        />
                          <CardItems
                        src={pic2}
                        text="1267 Forest Ave"
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards; 
import React from "react";
import CardItems from "./CardItems";
import './Cards.css'
import pic1 from './Storepic.jpeg'
import pic2 from './sky3.jpg'


function Cards(){
    return(
        <div className="cards">
            <h1>Visit Our Location</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems
                        src={pic1}
                        text="2236 Forest Ave"
                        path='/services'
                        />
                          <CardItems
                        src='https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/294902637_484343517000582_7020877820784946936_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_aid=0&_nc_ohc=tMJYwfmaqmMAX9gwlH4&_nc_ht=scontent-lga3-2.xx&oh=00_AfD0_g0f4vUYHBGZFLqLGsHb_N4ZGhIk8x6tfWEuU2flDg&oe=63EF8141'
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
import React from "react";
import Cards from "./Cards";
import HomeContainer from './HomeContainer'
import MailList from "./MailList";

function Home(){
    return(
        <>
            <HomeContainer /> 
            <Cards/>
            <MailList/>
        </>
    )
}
export default Home;
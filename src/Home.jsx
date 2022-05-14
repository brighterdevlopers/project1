import React from 'react';
import "./web1.css";
import web from "../src/img/ok.svg";
import Comon from "./Comon";

const Home = () => {
    return(
        <>
        <div className='homed'>
        <Comon name='Grow your business with ' imgsrc={web} visit2='/service' btnname2='Get Started' visit1='https://codeforces.com/profile/deepsutariya' btnname1='My Profile'/>
        </div>
        </>
    );
};

export default Home;

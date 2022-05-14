import React from 'react';
import "./web1.css";
import web from "../src/img/ok.svg";
import Comon from "./Comon";

const Home = () => {
    return(
        <>
        <div className='homed'>
        <Comon name='Grow your business with ' imgsrc={web} visit1='/service' btnname1='Get Started' visit2='https://codeforces.com/profile/deepsutariya' btnname2='My Profile'/>
        </div>
        </>
    );
};

export default Home;
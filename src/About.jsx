import React from 'react';
import "./web1.css";
import web from "../src/img/Aboutpage.jpg";
import { NavLink } from 'react-router-dom';
import Comon from "./Comon";

const About = () => {
    return(
        <>
            <Comon name='welcome to About page' imgsrc={web} visit1='https://codeforces.com/profile/deepsutariya' btnname1='My Profile' btnname2='Contact' visit2='/contact' />

        </>
    );
};

export default About;
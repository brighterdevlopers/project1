import React from 'react';
import "./web1.css";
import { NavLink } from 'react-router-dom';

const Comon = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 order-2 order-lg-1  d-flex justify-content-center flex-column">
                                    <h1>{props.name} <strong className='barnd-name'>Deep Sutariya</strong></h1>
                                    <h2 className='my-3'>We are the team of talented devlopers making website </h2>
                                    <div className='row'>
                                        <div className='mt-3'>
                                            <a href={props.visit1} className="get_started">{props.btnname1}</a>
                                        </div>
                                        <div className='mt-3'>
                                            <NavLink to={props.visit2} className="get_started">{props.btnname2}</NavLink>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6 col-8 mx-auto order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} className="img-fluid animated" alt='image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Comon;

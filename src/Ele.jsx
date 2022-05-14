import React from 'react';
import { NavLink } from 'react-router-dom';
import "./web1.css";

const Ele = (props) => {
    return(
        <>
             <div className='col-lg-4 col-10 mx-auto d-flex align-items-stretch'>
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                    <div className="card-body d-flex align-items-stretch flex-column">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text  align-items-stretch mb-auto">{props.text}</p>
                        <a href={props.link1} className="btn btn-outline-primary">Explore</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ele;
import Rract from 'react';
import "./index.css";

function Card(props){
    return(
    <>
        <div className='cards'>
        <div className='card'>
        <img className='img' src={props.imgsrc} />
        <div className='card_info'>
            <span className='title'>A NETFLIX ORIGINAL SERIES</span>
            <h3 className='sname'>{props.sname}</h3>
            <button className='button'>WATCH NOW</button>
        </div>
        </div>
        </div>
    </>
    );
}

export default Card;
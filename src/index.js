import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";

// import App from './App';

// import {add,diff,mul,div} from "./Calc";

// import Card from "./Card";
// import Clock from './Clock';

// import Todo from "./Todo";
// import "./Todo.css";

// import Incdec from "./Incdec";
// import "./Incdec.css"

import Web1 from './Web1';
import './web1.css';
import {BrowserRouter} from 'react-router-dom';


// ReactDOM.render(
//   <div>
//     <h1>Hi!!</h1>
//     <h2>Hi!!</h2>
//     <h3>Hi!!</h3>
//   </div>,
//     document.getElementById('root'));

// var h1=document.createElement('h1');
// h1.innerHTML="HELLO!! (in js)";
// document.getElementById('root').appendChild(h1);

// ReactDOM.render(
//   [
//     <h1>HELLO!!</h1>,
//     <h2>HELLO!!</h2>,
//     <h3>HELLO!!</h3>
//   ],
//     document.getElementById('root'));

// ReactDOM.render(
//   <React.Fragment>
//     <h1>O!!</h1>
//     <h2>O!!</h2>
//     <h3>O!!</h3>
//   </React.Fragment>,
//     document.getElementById('root'));

// ReactDOM.render(
//   <React.Fragment>
//     <h1>O!!</h1>
//     <p>O!!</p>
//     <ol>
//       <li>s1</li>
//       <li>s2</li>
//       <li>s3</li>
//       <li>s4</li>
//       <li>s5</li>
//     </ol>
//   </React.Fragment>,
//     document.getElementById('root'));

// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/250/300";
// const img3="https://picsum.photos/300/300";
// const link="google.com";

// ReactDOM.render(
//   <>
//   <h1 className='htag'>hello my name is deep</h1>
//   <div className='class1'>
//     <img src={img1} alt=' ' />
//     <img src={img2} alt=' ' />
//     <img src={img3}/>
//   </div>
//   </>,
//     document.getElementById('root'));

// let time = new Date(2022,3,3,24); //Date(year , month, date, time you want);
// time=time.getHours();
// let greet='';
// const css={};
// if(time>=1 && time<12){
//   greet='Good Morning';
//   css.color='green';
// }
// else if(time>=12 && time<19){
//   greet='Good Afternoon';
//   css.color='orange';
// }
// else{
//   greet='Good Night';
//   css.color='gray';
// }

// ReactDOM.render(
//   <>
//     <h1 className='greet'>Hello , <span style={css}>{greet}</span></h1>
//   </>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <>
//     <ul>
//       <li>sum {add(2,2)}</li>
//       <li>diff {diff(6,2)}</li>
//       <li>mul {mul(3,2)}</li>
//       <li>div {div(40,3)}</li>
//     </ul>
//   </>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//   <>
//   <h1 className='heading'>TOP 5 NETFLIX SERIES</h1>
//   <Card imgsrc='https://picsum.photos/200/300' sname='DARK' />
//   <Card imgsrc='https://picsum.photos/200/300' sname='SUNFLOWER' />
//   <Card imgsrc='https://picsum.photos/200/300' sname='STRANGER THINGS' />
//   <Card imgsrc='https://picsum.photos/200/300' sname='NARUTO' />
//   <Card imgsrc='https://picsum.photos/200/300' sname='DEMON SLYER' />
//   </>,
//     document.getElementById('root')
// );


// ReactDOM.render(
//  <>
//     <Incdec />
//  </>,
//     document.getElementById('root')
// );


ReactDOM.render(
    <>
        <BrowserRouter>
            <Web1 />
        </BrowserRouter>
    </>,
    document.getElementById('root')
);
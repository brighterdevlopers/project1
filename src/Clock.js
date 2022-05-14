import React, { useState } from "react";
import "./clock.css";

// const Clock = () =>{

//     const [count,newcount] =useState(0);

//     const incno = () =>{
//         newcount(count + 1);
//     }

//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={incno}>CLICK ME</button>
//         </>
//     );
// }


// const Clock = () =>{
//     let xtime = new Date().toLocaleTimeString();
//     const [time,newtime] =useState(0);
    
//     const update = () =>{
//         let xtime = new Date().toLocaleTimeString();
//         newtime(xtime);
//     }

//     return(
//         <>
//         <h1>{time}</h1>
//         <button onClick={update}>CLICK ME</button>
//         </>
//     );
// }


const Clock = () =>{
    
    let xtime = new Date().toLocaleTimeString();
    const [time,newtime] =useState(xtime);
    
    const update = () =>{
        xtime = new Date().toLocaleTimeString();
        newtime(xtime);
    }
    setInterval(update,1000);

    return(
        <>
        <h1>{time}</h1>
        </>
    );
}


export default Clock;
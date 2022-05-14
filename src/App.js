import React, { useState } from "react";
import ReactDOM from "react";

let count;
const App = () =>{
    const state=useState();
    const [count,newcount] =useState(0);

    const incno = () =>{
        newcount(count + 1);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={incno}>CLICK ME</button>
        </>
    );
}


export default App;
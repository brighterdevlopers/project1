import React, { useState } from "react";

const Incdec=()=>{

    const [count, setcount]=useState(0);

    const inc=()=>{
        setcount(count+1);
    }

    const dec=()=>{
        (count-1)<0 ? alert("count < 0") : setcount(count-1);
    }

    return(
        <>
        <div className="mainclass">
            <div className="containerclass">
                <h1>{count}</h1>
                <div className="buttons">
                    <button onClick={inc}>INC</button>
                    <button onClick={dec}>DEC</button>
                </div>
            </div>
        </div>
        </>
    );

};

export default Incdec;
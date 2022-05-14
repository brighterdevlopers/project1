import React from 'react';
import Ele from './Ele';
import Sdata from './Sdata';


const Service = () => {
    return(
        <>
            <div className='my-5'>
            <h1 className='text-center abc'>OUR SERVICES</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className='row gy-4'>


                            {
                                Sdata.map((val,ind)=>{
                                    return <Ele 
                                        imgsrc={val.img}
                                        title={val.tital}
                                        text={val.text}
                                        link1={val.link1}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
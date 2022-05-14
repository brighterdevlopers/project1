import React, { useState } from 'react';
import "./web1.css";

const Contact = () => {

    const[input,setinput]=useState({
        fname:'',
        lname:'',
        email:'',
        msg:'',
    }
    );

    const InputEvent =(event)=>{
        
        const{name,value}=event.target;
        setinput((preval)=>{
            return{
                ...preval,
                [name] : value,
            }
        })

    };
    
    
    const fsubmit =(e)=>{
        e.preventDefault();
        if(input.fname !== "" && input.lname !== "" && input.email !== "" && input.msg !== ""){
            alert(`Hello, ${input.fname} ${input.lname}. Thank you for contacting us we'll contact you through "${input.email}". Your massage "${input.msg}" is recived.`);
            setinput({
                fname: '',
                lname: '',
                email: '',
                msg: '',
            });
        }
        else
        alert("Fill the form properly!");
    };

    


    return (
        <>

            <h1 className='text-center my-5 abc'>Contact Us</h1>
            <div className='row'>
                <div className='col-md-4 col-10 mx-auto'>
                    <form onSubmit={fsubmit} >
                        <div className='mb-3'>
                            <label >First Name :</label>
                            <input type="text" className="form-control m-auto" name='fname' value={input.fname } onChange={InputEvent} placeholder="First name" aria-label="First name" />
                        </div>

                        <div className='mb-3'>
                            <label for="floatingInput">Last Name :</label>
                            <input type="text" className="form-control m-auto" name='lname' value={input.lname } onChange={InputEvent} placeholder="Last name" aria-label="Last name" />
                        </div>
 
                        <div className='mb-3'>
                            <label for="floatingInput">Email address :</label>
                            <input type="email" className="form-control m-auto" id="floatingInput" name='email' value={input.email } onChange={InputEvent} placeholder="name@example.com" />
                        </div>

                        <div className='mb-3'>
                            <label for="floatingInput">Text :</label>
                            <textarea className='form-control m-auto' rows="3" name='msg' value={ input.msg} onChange={InputEvent} placeholder='Type something..' />
                        </div>

                        <div className='mb-4'>
                            <button className='btn btn-outline-primary mt-2' type='submit'>Submit Form</button>
                        </div>
                        

                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
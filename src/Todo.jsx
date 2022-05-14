import react, { useState } from "react";

const Todo = () => {

    const [inputlist, setinputlist]=useState("");
    const [items, setitems]=useState([]);

    const itemevents=(event)=>{
        setinputlist(event.target.value);
    };
    
    const click=(event)=>{

        // pela olditem ma kai nai hse so inputlist nu print thase then next tiem
        // olditem na inputlist nu hse e and new inputlist store thase only input list lakhi ne try krvu

        setitems((olditem) => {
            return [...olditem,inputlist];   
        });
        // item add kri ne clear krva mate array bni jay pchi
        setinputlist("");
    };

    const removeitem =(id)=>{

        setitems((olditem)=>{
            return olditem.filter((olditem,index)=>{
                return  index!==id ;
            })
        })        
    };

    return (
    <>
        <div className="maindiv">
            <div className="centerdiv">
                <br />
                    <h1>to do list</h1>
                <br />
                <input 
                    type="text" 
                    placeholder="Add Items" 
                    onChange={itemevents}
                    value={inputlist}
                />
                <button onClick={click}> + </button>

                <ol>
                    {/* for print */} 
                    {items.map( (val,id)=> {
                        return (
                            <div className="todo_style">
                            <button className="remove" onClick={()=>{
                                return(
                                    removeitem(id)
                                );
                            }}>X</button>
                            <li>{val}</li>
                            </div>
                        );
                    })}
                </ol>
            </div>
        </div>
    </>
    );
};

export default Todo;
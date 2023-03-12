import React, { useEffect, useState } from 'react';
import '../components/Todolist.css'
import todoicon from '../images/icons8-todo-list-64.png'
import victory from '../images/peace.png'

const getLocalItems=()=>{
    let list=localStorage.getItem('lists');

    if(list)
    {
        return JSON.parse( localStorage.getItem('lists'));
    }
    else{
        return [];
    }
}


const TodoList = () => {
    const[inputData,setInputData]=useState('');
    const[items,setItems]=useState(getLocalItems());
    const addItem=()=>{
        if(!inputData)
        {
alert("Please fill the data")
        }else{
            setItems([...items,inputData])
            setInputData("")
        }
        
    }
    const deleteItem=(id)=>{
        const updatedData=items.filter((data,indx)=>{
            return indx!=id;
        })
        setItems(updatedData)

    }

    const removeAll=()=>{
        setItems([])
    }

    // add data to localstorage

    useEffect(()=>{
localStorage.setItem("lists",JSON.stringify(items) );
    },[items])
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={todoicon} alt="" />
                        <h3>Add Your List Here</h3>
                    </figure>
                    <div className='addItems'>
                        <input 
                        value={inputData}
                        onChange={(e)=> setInputData(e.target.value)}
                        className='input-text' type="text" placeholder='Add Items ' />

                        <i className="fa fa-plus add-btn " onClick={addItem}></i>

                    </div>
                    <div className='showItems'>
                        {
                            items.map((data,indx)=>{

                       return(
                        <div className='eachItem' key={indx}>
                        <h4 className='heading'>{data}</h4>
                        <i className="fa fa-trash del-btn " onClick={()=>deleteItem(indx)}></i>
                    </div>
                       )
                            })
                        }
                

                    </div> 
                    <div className='clearItems'>
                  <button onClick={removeAll} className="remove"><span> Remove ALL</span></button>
                    </div>
                </div>

            </div>

        </>
    );
};

export default TodoList;
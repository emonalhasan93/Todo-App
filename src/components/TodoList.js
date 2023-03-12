import React from 'react';
import '../components/Todolist.css'
import todoicon from '../images/icons8-todo-list-64.png'
import victory from '../images/peace.png'

const TodoList = () => {
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={todoicon} alt="" />
                        <h3>Add Your List Here</h3>
                    </figure>
                    <div className='addItems'>
                        <input className='input-text' type="text" placeholder='Add Items ' />

                        <i className="fa fa-plus add-btn "></i>

                    </div>
                    <div className='showItems'>
                        <div className='eachItem'>
                            <h4 className='heading'>Apple</h4>
                            <i className="fa fa-trash del-btn"></i>
                        </div>

                    </div> 
                    <div className='clearItems'>
                  <button className="remove"><span> Remove ALL</span></button>
                    </div>
                </div>

            </div>

        </>
    );
};

export default TodoList;
// src/components/InventoryForm.jsx
import React from 'react';
import '../styles/App.css';


function InventoryForm() {

    return (
        <>
        <form action="form">

            <div className='form'>
                
                <h2>Inventory Form</h2>
                
                <p>Task Name:</p>
                <input type="text" placeholder='Enter your task' />

                <p>Task Time:</p>
                <input type="time" />

                <p>Task Status:</p>
                <select name="" id="">
                <option value="default">Select</option>
                <option value="done">Done</option>
                <option value="not done">Not Done</option>
                </select>




            </div>

            </form>
        </>
    );
}

export default InventoryForm;

'use client';
import React, { useState } from 'react'

const Todolist = () => {

    // let count = 0; 

    // const [count, setCount] = useState(0);

    const [taskList, setTaskList] = useState([]);

    const addNewTask = (e) => {

      console.log(e.code);
      if(e.code === 'Enter'){

        if(!e.target.value){
          alert('Please enter a task to add');
          return;
        }
        
             
        const newTask = { text : e.target.value, completed: false};
        
        setTaskList( [ newTask, ...taskList ] );

        e.target.value = '';
      }
    }

    const deleteTask = (index) => {
      console.log(index);

      const temp = taskList;
      temp.splice(index, 1);
      setTaskList([...temp]);
    };

    const updateTask = (index) => {
      const temp = taskList;
      temp[index].completed = !temp[index].completed;
      setTaskList([...temp]);
    }
  
    return (
    <div className='bg-gray-300 h-screen pt-10'>
      
      <div className='container mx-auto rounded-lg bg-white border'>
       
       <div className='p-4 border-b-2'>
        {/* <h1 className='text-3xl'>{count}</h1> */}
        {/* <button onClick={ () => { setCount(count+1); console.log(count);}}>add count</button> */}
        <input 
        onKeyDown={addNewTask}
        placeholder='Enter a Task to add in your todolist'  type="text"
        className='px-3 py-2 rounded w-full bg-gray-200' />

       </div>
       <div className='p-4'>
         {
          taskList.map( (task, index) => { return <div key={index} className='rounded mb-4 p-4 border shadow'>
            
            {task.completed ? (
              <p className='bg-green-700 text-white w-fit rounded-full px-2'>Completed</p>
            ) : (
              <p className='bg-yellow-600 text-white w-fit rounded-full px-2'>Pending</p>
            ) }
            <p className='text-xl'>{task.text}</p>



            <div className='mt-5 flex gap-5'>
               <button onClick={ () => { deleteTask(index) }} className='bg-red-500 text-white rounded-full px-3 py-1'>Delete</button>
               <button onClick={ () => { updateTask(index)}} className='bg-blue-500 text-white rounded-full px-3 py-1'>Complete</button>
            </div>
          </div>} )
         } 
       </div>
      </div>
    </div>
  )
} 

export default Todolist;

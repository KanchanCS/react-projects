import React, { useState } from 'react'
import image from '../assets/image.jpg'
import Task from './TaskList'
import uniqid from 'uniqid';
function ToDoList() {
  const [task, setTask] = useState("");

  const [addTask, setAddTask] = useState([]);

  const [update, setUpdate] = useState(true);

  const [edit, setEdit] = useState(null);

  const handleaddTask = () => {
    if (task === "") {
      alert("Please Enter Your Task");
      return;
    }
    else if (!update) {
      setAddTask(addTask.map((newTask) => {
        if(newTask.id === edit){
          return { ...newTask, title: task }
        }
        return newTask;
      }))
      setUpdate(true);
      setTask("");
      setEdit(null);
    } else {
      const allActivity = { id: uniqid(), title: task , complete:false };
    setAddTask([...addTask, allActivity]);
    }
    
    setTask("");
  };
  return (
    <div>
          
      <section className='overflow-hidden'>
        <div className='mx-auto px-5 py-24 w-[80%] flex flex-wrap'>
          <img src={image} alt="" className='w-full lg:h-auto h-64 object-cover rounded lg:w-[50%] md:w-1/2' />
          <div className='lg:w-[40%] md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 border-2'>
            <h2 className='font-bold md-5 text-center text-5xl'>Todo</h2>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className='mt-4 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Enter Your Task' />
            

            {
              update ? <button className='bg-indigo-500 border-0 py-2 mb-6 mt-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={handleaddTask} >Add</button> :
              <button className='bg-indigo-500 border-0 py-2 mb-6 mt-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={handleaddTask} >Update</button>
            }
           

            
            <Task addTask={addTask} setAddTask={setAddTask} setTask={setTask} setUpdate={ setUpdate} setEdit={setEdit} />
          </div>
        </div>
      </section>

    </div>
  )
}

export default ToDoList
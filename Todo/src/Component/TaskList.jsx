import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
const Task = ({ addTask,setAddTask,setTask,setUpdate, setEdit }) => {
    
  

    const handleDelete = (id) => {
        const isConfirm = window.confirm("Do you want to delete this task?")
        if (isConfirm) {
            const filterItem = addTask.filter((item) => (
                id != item.id
            ))
            setAddTask(filterItem)
        }
       
    };

    const handleEdit = (id) => {
        const editItem = addTask.find((element) => {
            return element.id === id
        })
        setTask(editItem.title);
        setUpdate(false);
        setEdit(id)
    };
    const handleRemove = () => {
        setAddTask([])
    };

    const handleComplete = (id) => {
        setAddTask(addTask.map((completeItem) => {
            if (completeItem.id === id) {
                return { ...completeItem, complete: !completeItem.complete }
            }
            return completeItem;
        }))
    };

    return (
        <div>
            <ul>
                {
                    addTask.map((Task) => (
                        <li className= {`flex justify-between border-b-2 px-2 py-1 items-center ${Task.complete?"line-through": ""}`} key={Task.id}>
                        <div className="flex gap-3">
                            <span className="cursor-pointer"><FaCheckSquare size={25} onClick={() => handleComplete(Task.id)}/></span>
                                <span>{ Task.title}</span>
                        </div>
                        <div className="flex gap-3">
                        <span className="cursor-pointer" onClick={() => handleEdit(Task.id)}><FaUserEdit size={25}/></span>
                        <span className="cursor-pointer" onClick={() => handleDelete(Task.id)}><MdDelete size={25}/></span>
                        </div>
                    </li>
                    ))
               }
            </ul>
            {
                addTask.length >=2 &&  <button className="bg-red-700 text-white px-3 py-2 rounded-md my-5 hover:bg-red-400" onClick={handleRemove}>Remove all</button>
            }
           
        </div>
        
    )
}

export default Task
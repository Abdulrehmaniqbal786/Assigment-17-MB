import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {addTodo,setTodoList,sortTodo,updateTodo,toggleCompleted} from '../store/slices/ToDoSlice'
import {TiPencil}  from 'react-icons/ti'
import {BsTrash}  from 'react-icons/bs'
import empty from '../assets/empty.jpg'
const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(state=>state.todo.todoList);
    const sortCriteria = useSelector(state=>state.todo.sortCriteria)
    const [showModel,setShowModel] = useState(false)
    const [currentTodo ,setCurrentTodo] = useState(null)
    const [newTask ,setNewTask] = useState("")
    console.log(newTask)

    useEffect (()=>{
        if(todoList.length > 0){
            localStorage.setItem("todolist" , JSON.stringify(todoList));
        }
    } ,[todoList]);

    useEffect(()=>{
        const localTodoList = JSON.parse(localStorage.getItem("todoList"))
        if(localTodoList){
            dispatch(setTodoList(localTodoList));
        }
    } 
    ,[])





    const handleAddTodo = (task) => {
        if(task.trim().length === 0){
            alert("Please enter a task");
        }else{
            dispatch(
                addTodo({
                        task:task,
                        id : Date.now()

                })

            );
            setNewTask("")
            setShowModel(true)

        }
    }
const handleSort = (sortCriteria) =>{
    dispatch(sortTodo(sortCriteria))
}
const sortTodoList = todoList.filter(todo =>{
    if(sortCriteria === "All")
    return true;
    if(sortCriteria === "Completed"  && todo.Completed) return true;
    if(sortCriteria === "Not Completed" && !todo.notComplete) return true;
    return false;
})
const handleUpdateTodo = (id,task) =>{
    if(task.trim().length === 0){
        alert("Please enter a task");
    }else{
        dispatch(updateTodo ({task:task,id : id,}));
        setShowModel(false)

    }
}
const handleDeleteTodo = (id) => {
    const updateTodo = todoList.filter((todo =>
         todo.id != id)) ;
    dispatch(setTodoList(updateTodo));
    localStorage.setItem("todoList" , JSON.stringify(updateTodo));
    
};

const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted({id}))
}


  return (


    <div className='mt-[40px]'>
         {showModel && (
        <div className='fixed w-full left-0 top-0 h-full 
         bg-transparentBlack flex items-center  justify-center'>
                <div className='bg-white p-8 rounded-md'>
                <input 
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className='border p-2  rounded-md outline-none mb-8'
                 placeholder={currentTodo ? "Updated your task here" :
            "Enter your task here"} />

            <div className='flex gap-7'>
                {currentTodo ? <>
                <button onClick={() => {
                    setShowModel(false);
                    handleUpdateTodo(currentTodo.id , newTask)}}  className='bg-sunsetOrange text-white py-3 px-10 rounded-md'>Save</button>
                <button onClick={()=>setShowModel(false)} 
                 className='bg-Tangaroa text-white py-3 px-10 rounded-md'>Cancel</button>
                </> : <>
                <button onClick={()=>setShowModel(false)} 
                 className='bg-Tangaroa text-white py-3 px-10 rounded-md'>Cancel</button>
                <button  className='bg-sunsetOrange text-white py-3 px-10 rounded-md' onClick={()=>{setShowModel
                (false);handleAddTodo(newTask)}}>Add</button>
                
                </>
                }
            </div>


                </div>

         </div>
        
    )}

    <div className='flex items-center justify-center flex-col' >

        {todoList.length === 0 ? (
        <div className='mb-6'>
        
            <div className='sm:w-[500px] sm:h-[500px] min-w-[250px]'>
                <img width={300}  src={empty}  alt="" />
            </div>
            <p className='text-center text-Gray mt-6'>You have no todo's,please add one.</p>
        
        
        </div>
        ) : (
        <div className='container mx-auto mt-6'>

<div className='flex justify-center mb-6 '>
    <select onChange={e =>  handleSort(e.target.value)} className='p-1 outline-none rounded-md text-sm  bg-slate-300'>
        <option value="All" className='text-sm bg-none'>All</option>
        <option value="Completed" className='text-sm bg-none'>Completed</option>
        <option value="Not Completed" className='text-sm bg-none'>Not Completed</option>
      
    </select>
</div>



            <div>
        {sortTodoList.map((todo)  => (
            <div id={todo.id} className='flex items-center 
            justify-between  mb-6 bg-Tangaroa 
             p-4 mx-auto w-full md:w-[75%] rounded-md'>





                <div 
                className={`${todo.completed ? "line-through text-greenTeal"
                 : "text-sunsetOrange" } `}
                onClick={()=> {handleToggleCompleted(todo.id)}}>{todo.task}
                
                
                
                
                </div>
                <div>
                <button  className='bg-blue-500 text-white p-1 ml-2 rounded-md' onClick={()=>{
                    setShowModel(true); 
                    setCurrentTodo(todo);
                    setNewTask(todo.task);

                }}>
                        <TiPencil/>
                    </button>
                    <button onClick={()=>handleDeleteTodo(todo.id)}  className='bg-sunsetOrange text-white p-1 ml-2 rounded-md'>
                        <BsTrash/>
                    </button>
                </div>
            </div>
        ))}
        
        </div>
        </div>
        )}
    </div>
    


<center>
        <button className='bg-sunsetOrange  text-center text-white py-3 px-10
         rounded-md' onClick={()=> setShowModel(true)}>Add Task</button></center>
    </div>
  )
}

export default TodoList
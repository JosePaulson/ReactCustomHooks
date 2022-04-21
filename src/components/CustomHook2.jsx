import UseLocalStorage from "./hooks/UseLocalStorage";
function CustomHook2() {
    const [task, setTask] = UseLocalStorage('task', '')
    const [tasks, setTasks] = UseLocalStorage('tasks', [])

    function handleSubmit(e){
        e.preventDefault()

        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        }

        task.trim()!=='' && setTasks([...tasks, taskObj])
        setTask('')
    }

    function handleClick(index){
        tasks.splice(index, 1)
        setTasks([...tasks])
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit} className="mt-5">
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Task</label>
                    <input 
                        type="text" 
                        value={task} 
                        onChange={(e)=>{setTask(e.target.value)}} 
                        id='task' 
                        className="form-control mb-2" 
                    />
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </div>
            </form>
            {tasks.map((task, index)=>{
                return <h5 onClick={()=>handleClick(index)} key={index}>{task.task}</h5>
            })}
            <button onClick={()=>{
                setTasks(tasks.slice(1))
            }} className="btn btn-danger">Remove Task</button>
        </div> 
    );
}

export default CustomHook2;
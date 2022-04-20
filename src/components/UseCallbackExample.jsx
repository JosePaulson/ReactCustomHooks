import React, {useState, useCallback} from 'react'
function UseCallbackExample() {
    const [tasks, setTasks] = useState([])


    const addTasks = useCallback(()=>{
        setTasks(prev=>[...prev, 'some task'])
    }, [setTasks])

    return ( 
        <div>
            <Button addTask={addTasks} />
            {tasks.map((task,index)=>{
                return <p key={index}>{task}</p>
            })}
        </div>

     );
}

const Button = React.memo(({addTask}) => {
    console.log('button rendered')
    return (
        <button className='btn btn-primary my-4' onClick={addTask}>Add Task</button>
    )
})

export default UseCallbackExample;
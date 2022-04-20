import {useState, useEffect, useRef} from 'react'
function Todo() {

    const [todo, setTodo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const isMounted = useRef(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res=>res.json())
        .then(data => {
            setTimeout(()=>{
                if(isMounted.current) {
                    setTodo(data.title)
                    setIsLoading(false)
                }
            }, 1000)
            return ()=>{isMounted.current = false}
        }, [isMounted])

    }, [])
    return ( 
        isLoading ? <h2>Loading...</h2> : <h4>{todo}</h4>
     );
}

export default Todo;
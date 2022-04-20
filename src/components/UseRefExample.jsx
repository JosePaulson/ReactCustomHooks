import Todo from './Todo'
import {useRef, useState, useEffect} from 'react'
function UseRefExample() {
    //part 1
    const inputRef = useRef()
    const formTextRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        inputRef.current.value && setText()
    }
    
    function setText () {
        const formText = formTextRef.current.innerText
        const formTextColor = formTextRef.current.style.color
        formTextRef.current.innerText = 'Successfully submitted!!'
        formTextRef.current.style.color = '#f22'
        setTimeout(()=>{
            formTextRef.current.style.color = formTextColor
            formTextRef.current.innerText = formText
        }, 2000)
    }

    //part 2 prev state
    const renders = useRef(1)
    const [name, setName] = useState('')
    const prevName = useRef('')

    useEffect(()=>{
        renders.current = renders.current + 1
        prevName.current = name
    },[name])

    //part3 memory leak
    const [todo, setTodo] = useState(true)

    return ( 
        <div>
            {/*part1 */}
            <form className='mb-4' onSubmit={handleSubmit}>
                <div className="mb-1">
                    <label className='form-label' htmlFor="email">Email
                    </label>
                </div>
                <div className="mb-4">
                    <input placeholder='Enter your email' ref={inputRef} className='form-control' type="email" id="email" required/>
                    <div ref={formTextRef} className="form-text">We won't share your email with anyone.</div>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>

            {/*part2 */}
            <div className="mb-3">
                <h4 className="">Renders: {renders.current}</h4>
                <h4>PrevName: {prevName.current} </h4>
                <input 
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    placeholder='Enter some text' 
                    type="text" 
                    className="form-control" 
                />
            </div>

            {/*part 3 */}
            <button 
                onClick={()=>{setTodo(!todo)}} 
                className="btn btn-primary my-3"
            >
                Toggle Todo
            </button>
            {todo && <Todo />}
        </div>
     );
}

export default UseRefExample;
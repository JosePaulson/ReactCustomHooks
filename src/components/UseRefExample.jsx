import {useRef} from 'react'
function UseRefExample() {
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

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
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
        </div>
     );
}

export default UseRefExample;
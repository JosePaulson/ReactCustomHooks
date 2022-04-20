import {useState, useRef, useEffect, useMemo} from 'react'
function UseMemoExample() {
    const [num, setNum] = useState(1)
    const [inc, setInc] = useState(0)

    const renders = useRef(1)
 
    const root = useMemo(()=>getSqrt(num), [num])
    const diff = root.toFixed(3) - Math.floor(root)
    const sqrt = diff === 0 ? root : root.toFixed(3)

    function getSqrt(num){
        for(let i=0; i<1000; i++){
            console.log(i)
        }
        console.log('expensive function call')
        return Math.sqrt(num)
    }

    useEffect(()=>{
        renders.current = renders.current + 1
    })

    return ( 
        <div>
            <h3>Renders: {renders.current} </h3>
            <input 
                value={num} 
                onChange={(e)=>{setNum(e.target.value)}} 
                className='form-control my-4' type="number"
            />
            <h4>Square root of {num} is : {sqrt}</h4>
            <button 
                onClick={()=>{
                    setInc(prevState => {
                        console.log(prevState + 1)
                        return prevState + 1
                    })
                }} 
                className='btn btn-primary my-3'
            >
                Re-render
            </button>
        </div>
     );
}

export default UseMemoExample;
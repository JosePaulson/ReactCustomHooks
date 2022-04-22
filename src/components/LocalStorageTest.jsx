import {useState} from 'react'

function LocalStorageTest() {
    const [storageValue, setStorageValue] = useState('')
    const initialValue = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
    const [itemFromstorage, setItemFromstorage] = useState(initialValue)

    function handleSubmit (e) {
        e.preventDefault()
        // console.log(itemFromstorage)
        const value = itemFromstorage ? itemFromstorage : []
        const valueToStore = [...value, storageValue]
        // console.log(valueToStore)
    
        localStorage.setItem('tasks', JSON.stringify(valueToStore))
        storageValue.trim()!=='' && setItemFromstorage(prev=>[...prev, storageValue])
        setStorageValue('')
        console.log('rendering...')
    }

    // function handleClick() {

    // }

    return ( 
        <div>
            <form onSubmit={handleSubmit} className="mb-2">
                <input value={storageValue} onChange={(e)=>{setStorageValue(e.target.value)}} type="text" className="form-control mb-3" />
                <button type='submit' className="btn btn-primary">Add Item</button>
            </form>
            <button onClick={()=>{
                localStorage.removeItem('tasks')
                // setStorageValue()
                localStorage.setItem('tasks', JSON.stringify(itemFromstorage.slice(1)))
                setItemFromstorage(prev=>itemFromstorage.slice(1))
            }} className='btn btn-danger mb-2'>Remove Item</button>
            {itemFromstorage.map((item, index)=>{
                return <p key={index} className='mt-2'>{item}</p>
            })}
        </div>
     );
}

export default LocalStorageTest;
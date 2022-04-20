import {useState} from 'react'
function UseLocalStorage(key, initialValue) {
    const [localStorageValue, setLocalStorageValue] = useState(()=>getStorageValue(key, initialValue))

    const setValue = (value) => {
        const valueToStore = value instanceof Function ? value(localStorageValue) : value
        setLocalStorageValue(value)
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [localStorageValue, setValue]
}
function getStorageValue(key, initialValue) {
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default UseLocalStorage;
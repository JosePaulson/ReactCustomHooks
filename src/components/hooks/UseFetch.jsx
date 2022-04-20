import {useState, useEffect} from 'react'
function UseFetch(url, options) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function fetchData () {
            try {
                const response = fetch(url, options)
                const data = (await response).json()
                setData(data)
                setIsLoading(false)
            } catch (error) {
                setError(error)
                setIsLoading(false)
            }
        }

        fetchData()
        //eslint-disable-next-line
    }, [])
    return {data, error, isLoading}
}

export default UseFetch;
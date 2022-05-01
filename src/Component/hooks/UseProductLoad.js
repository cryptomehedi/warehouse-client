import axios from "axios"
import { useEffect, useState } from "react"

const useProductLoad =() => {
    const [products , setProducts] = useState([])
    useEffect(()=> {
        axios.get('https://warehouse-api-ser.herokuapp.com/stockAllPd')
        .then(data => setProducts(data.data))
    },[])
    return [products , setProducts]
}

export default useProductLoad
import axios from "axios"
import { useEffect, useState } from "react"

const useProductLoad =() => {
    const [products , setProducts] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:4000/stockAllPd')
        .then(data => setProducts(data.data))
    },[])
    return [products , setProducts]
}

export default useProductLoad
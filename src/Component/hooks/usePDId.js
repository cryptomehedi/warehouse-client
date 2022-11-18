import axios from "axios"
import { useEffect, useState } from "react"

const usePDId = productId =>{
    const [productDetails, setProductDetails] = useState([])

    useEffect(() => {
        axios.get(`https://warehouse-server.onrender.com/stock/${productId}`)
        .then(data => setProductDetails(data.data))
    },[productId])
    return [productDetails, setProductDetails]
}

export default usePDId
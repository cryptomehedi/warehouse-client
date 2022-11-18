import axios from "axios"
import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('')
    
    useEffect(()=>{
        const run = async()=>{
            const email = user?.user?.email || user?.email
            if(email){
                const {data} = await axios.post('https://warehouse-server.onrender.com/user',{email})
                setToken(data.accessToken)
                localStorage.setItem('accessToken', data.accessToken)
            }
        }
        run()
    },[user])
    return [token]
}

export default useToken
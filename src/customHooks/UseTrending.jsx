import { useEffect, useState } from "react"


function UseTrending() {
 const[trending, setTrending] = useState([])

 useEffect( function (){
    async function fetchTrending(){
       const response = await fetch("http://localhost:4000/Trending")
       const data = await response.json()
       setTrending(data)
    }
    fetchTrending()
 }, [])

  return [trending]

}

export default UseTrending

import { useEffect, useState } from "react"


function UseTrending() {
 const[trending, setTrending] = useState([])

 useEffect( function (){
    async function fetchTrending(){
       const response = await fetch("../data/Trending.json")
       const data = await response.json()
       setTrending(data)
    }
    fetchTrending()
 }, [])

  return [trending]

}

export default UseTrending

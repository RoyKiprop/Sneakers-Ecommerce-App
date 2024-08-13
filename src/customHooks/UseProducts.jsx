import { useEffect, useState } from "react"



function UseProducts() {

    const[products, setProducts] = useState([])

    useEffect(function (){
        async function fetchProducts(){
            try{
              const response = await fetch("http://localhost:3000/sneakers")
              if(!response.ok) throw new Error("Something went wrong while fetching sneakers")
              const data = await response.json()
              setProducts(data)
              if (data.Response === "False") throw new Error ("Sneakers not found")
            }
            catch(error){
                console.error(error)
            }
        }
        fetchProducts()
    }, [])

    return [products]
}


export default UseProducts

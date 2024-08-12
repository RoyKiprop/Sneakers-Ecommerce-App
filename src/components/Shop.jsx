import Products from "./Products"
import SideBar from "./SideBar"
import { CategoryProvider } from "../context/categoryContext"
import { useState } from "react"


function Shop() {
    const[search, setSearchValue] = useState('')
    console.log(search)

  return (
    <CategoryProvider>
        <section className="mx-28 flex gap-6">
            <SideBar search={search} setSearchValue={setSearchValue}/>
            <Products search={search}/>
            
        
        </section>
        
    </CategoryProvider>
 
  )
}

export default Shop

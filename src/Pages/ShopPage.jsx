
import { CategoryProvider } from "../context/categoryContext"
import Products from "../components/Products"
import SideBar from "../components/SideBar"


function Shop() {
  return (
    <CategoryProvider>
        <section className="mx-28 flex gap-6">
            <SideBar/>
            <Products/>
            
        
        </section>
    </CategoryProvider>
   
  )
}

export default Shop

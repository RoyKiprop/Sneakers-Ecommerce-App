
import { CategoryProvider } from "../context/categoryContext"
import Products from "./Products"
import SideBar from "./SideBar"


function Section1() {
  return (
    <CategoryProvider>
        <section className="mx-28 flex gap-6">
            <SideBar/>
            <Products/>
            
        
        </section>
    </CategoryProvider>
   
  )
}

export default Section1

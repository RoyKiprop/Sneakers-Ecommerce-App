import Category from "./CategoryFilter"
import PriceFilter from "./PriceFilter"
import SearchInput from "./SearchInput"

// import Cart from "./CartItems"

function SideBar() {
  return (
    <div className="flex flex-col gap-6 w-[20%] ">
        <SearchInput/>
        <Category/>
        <PriceFilter/>
        {/* <Cart/> */}


      
    </div>
  )
}

export default SideBar

/* eslint-disable react/prop-types */

import Category from "./CategoryFilter"
import PriceFilter from "./PriceFilter"
import SearchInput from "./SearchInput"



function SideBar({search, setSearchValue}) {
  return (
    <div className="sticky flex flex-col gap-6 w-[20%] ">
        <SearchInput search={search} setSearchValue={setSearchValue}/>
        <Category search={search}/>
        <PriceFilter/>
      


      
    </div>
  )
}

export default SideBar

import { IoIosSearch } from "react-icons/io";

import Button from "./Button"


function Search() {
  return (
    <form className=" flex items-center w-[50%]">
      <input
       
        type="text"
        className="text-veryDarkBlue w-full border-2 p-2 border- grayishBlue focus:outline-none focus:border-orangeCustom"
        placeholder="What are you looking for?"
      />
      <Button variant='search'>
        <IoIosSearch
          className="text-white h-5 w-5"
        />
      </Button>
      
    
  </form>
  )
}

export default Search

import { IoIosSearch } from "react-icons/io";

import Button from "./Button"


function Search() {
  return (
    <form className="">
      <input
       
        type="text"
        className=" text-white focus:outline-none"
        placeholder="What are you looking for?"
      />
      <Button>
        <IoIosSearch
          className="text-black"
        />
      </Button>
      
    
  </form>
  )
}

export default Search

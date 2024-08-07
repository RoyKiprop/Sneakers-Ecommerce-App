import { GoSearch } from "react-icons/go";

function SearchInput() {
  return (
    <form className="w-full">
      <div className="relative w-[100%]">
        <input
          type="text"
          className="w-full h-12 pl-4 pr-8 py-2 bg-gray-100 border  focus:outline-none focus:text-darkGrayishBlue hover:text-darkGrayishBlue focus:border-orangeCustom hover:border-orangeCustom"
          placeholder="Search Category..."
        />
        <GoSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-darkGrayishBlue"
        />
      </div>
    </form>
  )
}

export default SearchInput

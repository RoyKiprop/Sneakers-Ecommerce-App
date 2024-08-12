/* eslint-disable react/prop-types */
import { GoSearch } from "react-icons/go";

function SearchInput({search, setSearchValue}) {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="relative w-[100%]">
        <input
          value={search}
          type="text"
          className="w-full h-12 pl-4 pr-8 py-2 bg-gray-100 border  focus:outline-none focus:text-darkGrayishBlue hover:text-darkGrayishBlue focus:border-orangeCustom hover:border-orangeCustom"
          placeholder="Search Category..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <GoSearch
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-darkGrayishBlue"
        />
      </div>
    </form>
  )
}

export default SearchInput

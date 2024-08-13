/* eslint-disable react/prop-types */
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaThList } from "react-icons/fa";

function Layout({handleOneGrid,handleFourGrid}) {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-100 text-darkGrayishBlue">
        <p className="text-veryDarkBlue pl-2">Displaying Results</p>
        <div className="flex items-center gap-2">
            <TbLayoutDashboardFilled onClick={handleFourGrid} className="h-8 w-8 text-darkGrayishBlue"/>
            <FaThList onClick={handleOneGrid} className="h-7 w-7"/>
        </div>
      
    </div>
  )
}

export default Layout

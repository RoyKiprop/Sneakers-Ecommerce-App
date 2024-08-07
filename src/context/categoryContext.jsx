/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const categoryContext = createContext();

function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRange, setSelectedRange] = useState("All");

  return (
    <categoryContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedRange,
        setSelectedRange
      }}
    >
      {children}
    </categoryContext.Provider>
  );
}
function UseCategories(){
    const Context = useContext(categoryContext)
    if(Context === undefined) throw new Error("Context was used in a wrong place")
    return Context
    
}

export {CategoryProvider, UseCategories}
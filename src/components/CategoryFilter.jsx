/* eslint-disable react/prop-types */

import Card from "./card"
import UseProducts from "../customHooks/UseProducts"
import { UseCategories } from "../context/categoryContext"

function Category({search}) {
  const [products] = UseProducts()

  const {selectedCategory, setSelectedCategory} = UseCategories()

  const categories = ["All", ...new Set(products.map(product => product.category))]

  const filteredCategories = search
  ? categories.filter(category => category.toLowerCase().includes(search.toLowerCase()))
  : categories

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div>
      <h3 className="mb-3">Filter by Category</h3>
      <Card variant='filter'>
        {filteredCategories.map((category, index) => (
          <div key={index} className="flex items-center mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              <span className={`w-5 h-5 inline-block mr-2 rounded border ${
                selectedCategory === category
                  ? "bg-orangeCustom border-orangeCustom"
                  : "border-gray-400"
              }`}>
                {selectedCategory === category && (
                  <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                  </svg>
                )}
              </span>
              <span className="text-gray-700">{category}</span>
            </label>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default Category
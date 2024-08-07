import Card from "./card"
import UseProducts from "../customHooks/UseProducts"
import { UseCategories } from "../context/categoryContext"
import { useMemo } from "react"

function PriceFilter() {
  const [products] = UseProducts()
  const {selectedRange, setSelectedRange} = UseCategories()

  const priceRanges = useMemo(() => {
    const prices = products.map(product => parseInt(product.price.split(' ')[0]))
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)
    const rangeSize = 1000 
    const ranges = []

    for (let i = minPrice; i < maxPrice; i += rangeSize) {
      ranges.push(`${i}-${Math.min(i + rangeSize - 1, maxPrice)}`)
    }

    return ["All", ...ranges]
  }, [products])

  const handleRangeChange = (range) => {
    setSelectedRange(range)
  }

  return (
    <div>
      <h3 className="mb-3">Filter by Price</h3>
      <Card variant="filter">
        {priceRanges.map((range, index) => (
          <div key={index} className="flex items-center mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={selectedRange === range}
                onChange={() => handleRangeChange(range)}
              />
              <span className={`w-5 h-5 inline-block mr-2 rounded border ${
                selectedRange === range
                  ? "bg-orange-500 border-orange-500"
                  : "border-gray-400"
              }`}>
                {selectedRange === range && (
                  <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                  </svg>
                )}
              </span>
              <span className="text-gray-700">
                {range === "All" ? "All Prices" : `${range} KES`}
              </span>
            </label>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default PriceFilter
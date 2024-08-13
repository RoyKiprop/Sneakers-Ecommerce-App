import Button from "./Button";
import Card from "./card";
import Layout from "./Layout";
import UseProducts from "../customHooks/UseProducts";
import { UseCategories } from "../context/categoryContext";
import { UseCart } from "../context/cartContext";
import { UseSelected } from "../context/selectionContext";
import { useState } from "react";

function Products() {
  const [products] = UseProducts();
  const { selectedRange, selectedCategory } = UseCategories();
  const { dispatch } = UseCart();
  const { handleSelection } = UseSelected();

  const [oneGridDisplay, setOneGridDisplay] = useState(false);
  const [fourGridDisplay, setFourGridDisplay] = useState(false);
   
  const handleOneGrid = () => {
    setOneGridDisplay(true);
    setFourGridDisplay(false);
  };

  const handleFourGrid = () => {
    setFourGridDisplay(!fourGridDisplay);
    setOneGridDisplay(false);
  };
  
  const Price = (price) => {
    if (!price) return 0;
    const PriceParts = price.split(' ');
    return PriceParts.length > 0 ? Number(PriceParts[0]) : 0;
  };

  const filteredByCategory =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const filteredByPrice = selectedRange === "All"
    ? filteredByCategory
    : filteredByCategory.filter((product) => {
        const productPrice = Price(product.price);
        const [minPrice, maxPrice] = selectedRange.split('-').map(Number);
        return productPrice >= minPrice && productPrice <= maxPrice;
      });

  const gridClass = oneGridDisplay ? "grid-cols-1" : "grid-cols-4";
  const cardClass = oneGridDisplay ? "flex space-x-8" : "flex flex-col";

  return (
    <div className="w-full">
      <Layout handleFourGrid={handleFourGrid} handleOneGrid={handleOneGrid} />
      <div className={`mt-5 grid ${gridClass} gap-5`}>
        {filteredByPrice.map((product) => (
          <Card variant="products" key={product.Id} onClick={() => handleSelection(product)} className={cardClass}>
            <img
              src={product.imageUrl}
              className={`h-48 object-cover rounded-lg ${oneGridDisplay ? 'w-1/3' : 'w-full'}`}
            />
            <div className={`p-2 ${oneGridDisplay ? 'flex flex-col space-y-8 w-2/3' : 'text-center'}`}>
              <p className={`text-darkGrayishBlue mb-2 truncate ${oneGridDisplay ? 'text-left ml-16' : ''}`}>
                {product.name}
              </p>
              <p className={`font-semibold text-[#fe735e] mb-2 ${oneGridDisplay ? 'text-left ml-16' : ''}`}>
                {product.price}
              </p>
              <div className={`mt-2 ${oneGridDisplay ? 'text-left' : 'text-center'}`}>
                <Button onClick={() => dispatch({ type: 'Add', data: product })} variant="AddCart" oneGridDisplay={oneGridDisplay}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;

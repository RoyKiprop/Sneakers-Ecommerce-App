import Button from "./Button";
import Card from "./card";
import Layout from "./Layout";
import UseProducts from "../customHooks/UseProducts";
import { UseCategories } from "../context/categoryContext";
import { UseCart } from "../context/cartContext";
import { UseSelected } from "../context/selectionContext";

function Products() {
  const [products] = UseProducts();
  const { selectedRange, selectedCategory } = UseCategories();
  const{dispatch} = UseCart()
  const{handleSelection} = UseSelected()
 

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
    

  return (
    <div>
      <Layout />
      <div className="mt-5 grid grid-cols-4 gap-5">
        {filteredByPrice.map((product) => (
          <Card variant="products" key={product.Id} onClick={()=>handleSelection(product)}>
            <img
              src={product.imageUrl}
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="p-2 text-center text-darkGrayishBlue truncate">
              {product.name}
            </p>
            <p className=" p-2 text-center font-semibold text-[#fe735e]">
              {product.price}
            </p>
            <div className="flex mb-4 ">
              <Button onClick={() => dispatch({type: 'Add', data:product})} variant="AddCart">Add to Cart</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
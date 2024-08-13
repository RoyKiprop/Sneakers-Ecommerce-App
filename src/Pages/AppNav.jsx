import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import ShopPage from "./ShopPage";
import ProductDetails from "../components/productDetails";
import { SelectedProvider } from "../context/selectionContext";

function AppNav() {
  return (
    <SelectedProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="contactUs" element={<ContactPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product/:Id" element={<ProductDetails />} />
      </Routes>
    </SelectedProvider>
  );
}

export default AppNav;

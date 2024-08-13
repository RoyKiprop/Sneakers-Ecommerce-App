import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { ContextProvider } from "./context/cartContext";
import AppNav from "./Pages/AppNav";
import CartPage from "./components/CartPage";
import { useState } from "react";


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <body>
      <BrowserRouter>
        <ContextProvider>
            <Header toggleCart={toggleCart} isCartOpen={isCartOpen} />
            <Navigation />
            {isCartOpen && <CartPage toggleCart={toggleCart} />}
            <AppNav/>
            <Footer />
        </ContextProvider>
      </BrowserRouter>
      
    </body>
  );
}

export default App;

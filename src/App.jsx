import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { ContextProvider } from "./context/cartContext";
import AppNav from "./Pages/AppNav";

function App() {
  return (
    <body>
      <BrowserRouter>
        <ContextProvider>
          <Header />
          <Navigation />
          <AppNav/>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
      
    </body>
  );
}

export default App;

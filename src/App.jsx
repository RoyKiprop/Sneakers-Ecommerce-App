import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import ProductSlides from "./components/ProductSlides"
// import Section1 from "./components/Section1"
import { ContextProvider } from "./context/cartContext"




function App() {
 

  return (
    <body>
    <ContextProvider>
      <Header/>
      <Navigation/>
      <ProductSlides/>
      {/* <Section1/>
      <Footer/> */}
      <Footer/>
     
    </ContextProvider>
     
    </body>
  )
}

export default App

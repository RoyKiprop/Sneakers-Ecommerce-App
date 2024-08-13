/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const selectedContext = createContext()

function SelectedProvider({children}){

    const[selectedProduct, setSelectedProduct] = useState({})
    const[openSelected, setOpenSelected] = useState(false)
    const navigate = useNavigate()

    const handleSelection = (product) =>{

        setSelectedProduct(product)
        setOpenSelected(!openSelected)
        navigate(`/product/${product.Id}`)

    }
    
        
       

    return (
        <selectedContext.Provider value={{selectedProduct,openSelected,setSelectedProduct, handleSelection}}>
            {children}
        </selectedContext.Provider>
    )
}

function UseSelected (){
    const Context = useContext(selectedContext)
    if (Context === undefined)
        throw new Error("Context was used in a wrong place");
    return Context;
    }
export {SelectedProvider, UseSelected}
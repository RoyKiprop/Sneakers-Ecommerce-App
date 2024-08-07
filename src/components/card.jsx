/* eslint-disable react/prop-types */


function Card ({children, variant}) {

    const classVariation = {
        filter: "bg-gray-100 p-5 rounded-lg",
        products: "bg-white rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer",
        
      };
    
    
      const classes = ` ${classVariation[variant]}`;
 

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }

  export default Card
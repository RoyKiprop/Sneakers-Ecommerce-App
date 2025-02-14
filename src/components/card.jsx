/* eslint-disable react/prop-types */

function Card({ children, variant, onClick, className }) {
  const classVariation = {
    filter: "bg-gray-100 p-5 rounded-lg",
    products: "bg-white rounded-lg overflow-hidden transform transition duration-300 hover:shadow-sm hover:scale-105 cursor-pointer",
  };

  const classes = `${classVariation[variant]} ${className}`;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;

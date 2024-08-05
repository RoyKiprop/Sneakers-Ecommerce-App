/* eslint-disable react/prop-types */

function Button({ children, variant }) {
  const classVariation = {
    base_class: " bg-orangeCustom text-white",
    search: "py-3 px-10 rounded-tr-md rounded-br-md",
    login: "py-2 px-6 " // Added an example class for 'login'
  };

  // Combine the base class with the variant class
  const classes = `${classVariation.base_class} ${classVariation[variant]}`;

  return (
    <button className={classes}>
      {children}
    </button>
  );
}

export default Button;

/* eslint-disable react/prop-types */

function Button({ children, variant, onClick }) {
  const classVariation = {
    search: "py-3 px-10 bg-orangeCustom text-white rounded-tr-md rounded-br-md",
    login: "py-2 px-6 bg-orangeCustom text-white ",
    AddCart: "py-2 px-5 w-[80%] mx-auto rounded-md border border-customBlack focus:bg-orangeCustom hover:bg-orangeCustom focus:border-orangeCustom hover:border-orangeCustom   focus:text-white hover:text-white",
    CheckOut: "py-3 px-6 rounded-lg bg-orangeCustom text-customWhite font-semibold w-full"
  };


  const classes = ` ${classVariation[variant]}`;

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;

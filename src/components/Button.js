import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ children }) => {
  return (
    <button className="p-5 font-bold uppercase bg-red-700 rounded-md btn btn-primary ">
      {children}
    </button>
  );
};

export default Button;

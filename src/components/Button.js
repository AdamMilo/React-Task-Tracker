import { getQueriesForElement } from "@testing-library/dom";
import { isCompositeComponent } from "react-dom/test-utils";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  //The component's JSX return output
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.propTypes = {
  //propTypes is a property containing PropTypes class instances
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button; //exports the button class itself

Button.defaultProps = {
  color: "steelblue",
};

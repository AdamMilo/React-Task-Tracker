import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? "red" : "green"} text={showAdd ? "close" : "add"} onClick={onAdd} />
    </header>
  );
};

//CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
Header.defaultProps = {
  title: "Task Tracker", //This will set the default value of our prop
};

//Creating prop types
Header.propTypes = {
  title: PropTypes.string, //this will enforce string as a valid data type
};
export default Header;

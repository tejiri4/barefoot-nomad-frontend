// react libraries
import React from "react";
import Dropdown from "react-dropdown";

// external libraries
import PropTypes from "prop-types";

// styles
import "react-dropdown/style.css";
import "./AppDropdown.scss";

const AppDropdown = ({
  controlClassName,
  placeholder,
  options,
  handleSelect,
  disabled,
  value,
  error
}) => {
  return (
    <div className="app-drop-down">
      <Dropdown
        controlClassName={`${controlClassName} ${error && "error"}`}
        options={options}
        onChange={handleSelect(placeholder)}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
      />
      {error && <div className="app-drop-down__error">* required</div>}
    </div>
  );
};

AppDropdown.propTypes = {
  controlClassName: PropTypes.string,
  placeholder: PropTypes.string,
  handleSelect: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  )
};

export default AppDropdown;

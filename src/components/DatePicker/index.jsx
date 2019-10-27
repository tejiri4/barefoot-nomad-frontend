// react libraries
import React, { useState } from "react";

// third party libraries
import InputMoment from "input-moment";
import moment from "moment";

// external libraries
import PropTypes from "prop-types";

// styles
import "input-moment/dist/input-moment.css";
import "./DatePicker.scss";

const DatePicker = ({
  label,
  handleDatePickerChangeOrSave,
  disabled,
  error,
  width,
  errorMessage
}) => {
  const [date, setDate] = useState(moment());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [
    isDatePickerComponentVisited,
    setIsDatePickerComponentVisited
  ] = useState(false);

  const handleChange = date => {
    setDate(date);
    handleDatePickerChangeOrSave({ date, label, type: "change" });
  };

  const handleSave = label => () => {
    setShowDatePicker(false);
    handleDatePickerChangeOrSave({ label, date, type: "save" });
  };

  const handleShowDatePicker = () => {
    if (!disabled) {
      setShowDatePicker(!showDatePicker);
      setIsDatePickerComponentVisited(true);
    }
  };

  return (
    <div className="date-picker">
      <div>
        <div
          className={`date-picker__header ${width} ${error && "error"}`}
          onClick={handleShowDatePicker}
        >
          {isDatePickerComponentVisited ? date.format("llll") : label}
          <img
            src="https://res.cloudinary.com/store-manager/image/upload/v1572080424/barefoot-nomad/calendar.svg"
            alt="calender"
          />
        </div>
      </div>
      {showDatePicker && (
        <InputMoment
          moment={date}
          onChange={handleChange}
          minStep={5}
          onSave={handleSave(label)}
        />
      )}
      {error && <div className="date-picker__error">* {errorMessage}</div>}
    </div>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  handleDatePickerChangeOrSave: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  width: PropTypes.string,
  errorMessage: PropTypes.string
};

export default DatePicker;

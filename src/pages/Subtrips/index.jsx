// react libraries
import React, { useState } from "react";

// styles
import "./Subtrips.scss";

// external libraries
import PropTypes from "prop-types";

// components
import AppDropdown from "../../components/AppDropdown";
import DatePicker from "../../components/DatePicker";
import TextArea from "../../components/TextArea";

// fixtures
import { cities, accomodations } from "../NewRequestForm/fixtures";

const Subtrips = ({ isSubmit, index, setValueChange, subrequests }) => {
  const [errors, setErrors] = useState({
    originCity: true,
    destinationCity: true,
    accomodation: true,
    departureDate: true,
    reason: true
  });

  const handleSelect = placeholder => data => {
    switch (placeholder) {
      case "Origin City":
        setErrors({ ...errors, originCity: false });
        setValueChange({ index, key: "originCity", value: data.value });
        break;
      case "Destination City":
        setErrors({ ...errors, destinationCity: false });
        setValueChange({ index, key: "destinationCity", value: data.value });
        break;
      case "Accomodation":
        setErrors({ ...errors, accomodation: false });
        setValueChange({ index, key: "accomodation", value: data.value });
        break;
      default:
    }
  };

  const handleDatePickerChangeOrSave = ({ date, label, type }) => {
    switch (label) {
      case "Departure Date":
        setErrors({ ...errors, departureDate: false });
        type === "save " &&
          setValueChange({ index, key: "departureDate", value: date });
        break;
      default:
    }
  };

  const handleTextAreaChange = e => {
    setErrors({ ...errors, reason: e.target.value.length > 10 ? false : true });
    setValueChange({ index, key: "reason", value: e.target.value });
  };

  return (
    <div className="subtrips">
      <div className="subtrips__flex">
        <AppDropdown
          controlClassName="sm"
          handleSelect={handleSelect}
          placeholder="Origin City"
          options={cities}
          error={isSubmit && errors.originCity}
          value={subrequests[index].originCity}
        />
        <AppDropdown
          controlClassName="sm"
          handleSelect={handleSelect}
          placeholder="Destination City"
          options={cities}
          error={isSubmit && errors.destinationCity}
          value={subrequests[index].destinationCity}
        />
        <AppDropdown
          controlClassName="sm"
          handleSelect={handleSelect}
          placeholder="Accomodation"
          options={accomodations}
          error={isSubmit && errors.accomodation}
          value={subrequests[index].accomodation}
        />
        <DatePicker
          width="sm"
          label="Departure Date"
          error={isSubmit && errors.departureDate}
          errorMessage="required"
          handleDatePickerChangeOrSave={handleDatePickerChangeOrSave}
        />
      </div>
      <div className="textarea">
        <TextArea
          placeholder="Reason"
          error={isSubmit && errors.reason}
          handleTextAreaChange={handleTextAreaChange}
        />
      </div>
    </div>
  );
};

Subtrips.propTypes = {
  isSubmit: PropTypes.bool,
  index: PropTypes.number,
  setValueChange: PropTypes.func,
  subrequests: PropTypes.arrayOf(
    PropTypes.shape({
      originCity: PropTypes.string,
      destinationCity: PropTypes.string,
      accomodation: PropTypes.string,
      departureDate: PropTypes.date,
      reason: PropTypes.string
    })
  )
};

export default Subtrips;

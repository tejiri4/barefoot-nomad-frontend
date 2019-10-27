import React, { useState } from "react";

// styles
import "./NewRequestForm.scss";

// third party library
import moment from "moment";

// components
import AppDropdown from "../../components/AppDropdown";
import DatePicker from "../../components/DatePicker";
import TextArea from "../../components/TextArea";
import { Button, BasicButton } from "../../components/Button";
import Subtrips from "./../Subtrips";

// fixtures
import { types, cities, accomodations } from "./fixtures";

const NewRequestForm = () => {
  const [subtripsNum, setSubtripsNum] = useState(0);
  const [isDestinationCityDisabled, setIsDestinationCityDisabled] = useState(
    true
  );
  const [isReturnDateDisabled, setIsReturnDateDisabled] = useState(true);
  const [isAccomodationDisabled, setIsAccomodationDisabled] = useState(true);
  const [showDateError, setShowDateError] = useState(false);
  const [request, setRequest] = useState({
    type: "Type",
    originCity: "Origin City",
    destinationCity: "Destination City",
    accomodation: "Accomodation",
    departureDate: moment(),
    returnDate: moment(),
    reason: "",
    subrequests: []
  });
  const [errors, setErrors] = useState({
    type: true,
    originCity: true,
    destinationCity: true,
    accomodation: true,
    departureDate: true,
    returnDate: true,
    reason: true
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const handleBasicButtonClick = () => {
    const subrequests = [...request.subrequests];
    subrequests.push({
      originCity: "Origin City",
      destinationCity: "Destination City",
      accomodation: "Accomodation",
      departureDate: moment(),
      reason: ""
    });
    setRequest({ ...request, subrequests });
    setSubtripsNum(subtripsNum + 1);
  };

  const handleSelect = placeholder => ({ value }) => {
    switch (placeholder) {
      case "Type":
        setRequest({ ...request, type: value });
        setErrors({ ...errors, type: false });
        break;
      case "Origin City":
        setRequest({ ...request, originCity: value });
        setErrors({ ...errors, originCity: false });
        setIsDestinationCityDisabled(false);
        break;
      case "Destination City":
        setRequest({ ...request, destinationCity: value });
        setErrors({ ...errors, destinationCity: false });
        setIsAccomodationDisabled(false);
        break;
      case "Accomodation":
        setRequest({ ...request, accomodation: value });
        setErrors({ ...errors, accomodation: false });
        break;
      default:
    }
  };

  const handleDatePickerChangeOrSave = ({ label, date, type }) => {
    switch (label) {
      case "Return Date":
        setRequest({ ...request, returnDate: date });
        type === "save" &&
          setErrors({
            ...errors,
            returnDate: request.departureDate.isBefore(date) ? false : true
          });
        type === "save" && setShowDateError(true);
        break;
      case "Departure Date":
        setRequest({ ...request, departureDate: date });
        type === "save" &&
          setErrors({
            ...errors,
            returnDate: request.returnDate.isBefore(date) ? true : false,
            departureDate: moment().isBefore(date) ? false : true
          });
        type === "save" && setShowDateError(true);
        setIsReturnDateDisabled(false);
        break;
      default:
    }
  };

  const handleTextAreaChange = ({ target: { value } }) => {
    setErrors({ ...errors, reason: value.length > 10 ? false : true });
    setRequest({ ...request, reason: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmit(true);
  };

  const setValueChange = ({ index, key, value }) => {
    const subrequests = [...request.subrequests];
    subrequests[index][key] = value;
    setRequest({ ...request, subrequests });
  };

  return (
    <div className="new-request-form">
      <div className="new-request-form__title">
        <h1>New Trip Request</h1>
      </div>
      <div>
        <form>
          <div className="new-request-form__flex">
            <AppDropdown
              controlClassName="lg"
              placeholder="Type"
              options={types}
              handleSelect={handleSelect}
              value={request.type}
              error={isSubmit && errors.type}
            />
            <AppDropdown
              controlClassName="lg"
              placeholder="Origin City"
              options={cities}
              handleSelect={handleSelect}
              value={request.originCity}
              error={isSubmit && errors.originCity}
            />
          </div>
          <div className="new-request-form__flex">
            <AppDropdown
              controlClassName="lg"
              placeholder="Destination City"
              options={cities.filter(
                ({ value }) => value !== request.originCity
              )}
              handleSelect={handleSelect}
              disabled={isDestinationCityDisabled}
              value={request.destinationCity}
              error={isSubmit && errors.destinationCity}
            />
            <AppDropdown
              controlClassName="lg"
              placeholder="Accomodation"
              options={accomodations.filter(
                ({ city }) => city === request.destinationCity
              )}
              handleSelect={handleSelect}
              disabled={isAccomodationDisabled}
              value={request.accomodation}
              error={isSubmit && errors.accomodation}
            />
          </div>
          <div className="new-request-form__flex">
            <DatePicker
              width="lg"
              label="Departure Date"
              error={(showDateError || isSubmit) && errors.departureDate}
              errorMessage="required and greater than today's date"
              handleDatePickerChangeOrSave={handleDatePickerChangeOrSave}
            />
            <DatePicker
              width="lg"
              label="Return Date"
              error={(showDateError || isSubmit) && errors.returnDate}
              errorMessage="required and greater than departure date"
              disabled={isReturnDateDisabled}
              handleDatePickerChangeOrSave={handleDatePickerChangeOrSave}
            />
          </div>
          <TextArea
            placeholder="Reason"
            handleTextAreaChange={handleTextAreaChange}
            error={isSubmit && errors.reason}
          />
          {[...Array(subtripsNum)].map((_, index) => (
            <Subtrips
              key={index}
              isSubmit={isSubmit}
              departureDate={request.departureDate}
              returnDate={request.returnDate}
              index={index}
              setValueChange={setValueChange}
              subrequests={request.subrequests}
            />
          ))}
          <BasicButton
            borderColor="rgba(0, 0, 0, 0.6)"
            color="rgba(0, 0, 0, 0.6)"
            handleClick={handleBasicButtonClick}
          >
            <img
              src="https://res.cloudinary.com/store-manager/image/upload/v1572085092/barefoot-nomad/plus.svg"
              alt="add"
            />
            <span>Add subtrips</span>
          </BasicButton>
          <div className="new-request-form__submit">
            <Button text="Create" handleClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRequestForm;

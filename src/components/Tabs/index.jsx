// react libraries
import React, { useState } from "react";

// styles
import "./Tabs.scss";

// external libraries
import PropTypes from "prop-types";

const Tabs = ({ handleTabChange, tabContents }) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabSwitch = name => () => {
    setActiveTab(name);
    handleTabChange(name);
  };

  return (
    <div className="tabs">
      {tabContents.map(({ key, text }) => (
        <div
          className={`tabs__tab ${activeTab === key && "active"}`}
          onClick={handleTabSwitch(key)}
          key={key}
        >
          {text}
          <div
            className={`tabs__tab${activeTab === key && "__underline"}`}
          ></div>
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  handleTabChange: PropTypes.func,
  tabContents: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default Tabs;

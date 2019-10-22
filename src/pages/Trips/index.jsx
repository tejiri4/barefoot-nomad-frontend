// react libraries
import React from "react";

// styles
import "./Trips.scss";

// components
import Tabs from "./../../components/Tabs";
import { BasicButton } from "../../components/Button";

const Trips = () => {
  const handleTabChange = name => {};

  const tabContents = [
    {
      key: "all",
      text: "All"
    },
    {
      key: "pending",
      text: "Pending"
    },
    {
      key: "approved",
      text: "Approved"
    },
    {
      key: "rejected",
      text: "Rejected"
    }
  ];

  return (
    <div className="trips">
      <Tabs handleTabChange={handleTabChange} tabContents={tabContents} />
      <div className="trips__new-request">
        <BasicButton text="New Request" />
      </div>
    </div>
  );
};

export default Trips;

// react libraries
import React, { useState } from "react";

// styles
import "./Trips.scss";

// components
import Tabs from "../../components/Tabs";
import { BasicButton } from "../../components/Button";
import AppModal from "../../components/AppModal";
import NewRequestForm from "../NewRequestForm";

const Trips = () => {
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = name => {};

  const showNewRequestModal = () => setShowModal(!showModal);

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
        <AppModal
          maxWidth="750px"
          showModal={showModal}
          trigger={
            <BasicButton text="New Request" handleClick={showNewRequestModal} />
          }
        >
          <NewRequestForm />
        </AppModal>
      </div>
    </div>
  );
};

export default Trips;

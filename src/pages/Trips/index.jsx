// react libraries
import React, { useState } from "react";

// styles
import "./Trips.scss";

// components
import Tabs from "../../components/Tabs";
import { BasicButton } from "../../components/Button";
import AppModal from "../../components/AppModal";
import NewRequestForm from "../NewRequestForm";
import RequestCard from "../../components/RequestCard";

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
      <div className="trips__header">
        <Tabs handleTabChange={handleTabChange} tabContents={tabContents} />
        <div className="trips__new-request">
          <AppModal
            maxWidth="750px"
            showModal={showModal}
            trigger={
              <BasicButton
                text="New Request"
                handleClick={showNewRequestModal}
              />
            }
          >
            <NewRequestForm />
          </AppModal>
        </div>
      </div>
      <div>
        <RequestCard
          id="1"
          type="Return Trip"
          origin="Lagos"
          destination="Jos"
          date="24 Nov, 2019"
          status="Approved"
        />
        <RequestCard
          id="2"
          type="Return Trip"
          origin="New York"
          destination="New Jersey"
          date="24 Nov, 2020"
          user={{
            image:
              "https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg",
            name: "Dwayne Johnson"
          }}
          status="Approved"
        />
      </div>
    </div>
  );
};

export default Trips;

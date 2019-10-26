import React from "react";

// styles
import './Dashboard.scss'

// components
import DashboardCard from '../../components/DashboardCard';
import RequestCard from '../../components/RequestCard';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <DashboardCard
          className={"dashboard__pending-trips"}
          tripNum={2}
          tripName={"Pending Trips"}
        />
        <DashboardCard
          className={"dashboard__approved-trips"}
          tripNum={8}
          tripName={"Approved Trips"}
        />
        <DashboardCard
          className={"dashboard__declined-trips"}
          tripNum={1}
          tripName={"Declined Trips"}
        />
        <DashboardCard
          className={"dashboard__total-trips"}
          tripNum={11}
          tripName={"Total Trips"}
        />
      </div>
      <h3 className="dashboard__section-title">Recent Trips</h3>
      <RequestCard
        type="Return Trip"
        origin="Lagos"
        destination="Jos"
        date="24 Nov, 2019"
        status="Approved"
      />
      <RequestCard
        type="Return Trip"
        origin="New York"
        destination="New Jersey"
        date="24 Nov, 2020"
        user={{ image: "https://res.cloudinary.com/store-manager/image/upload/v1571533873/barefoot-nomad/profile.jpg", name: "Dwayne Johnson" }}
        status="Approved"
      />
    </>
  );
};

export default Dashboard;

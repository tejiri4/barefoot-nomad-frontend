import React from "react";

// styles
import './Dashboard.scss'

// components
import DashboardCard from '../../components/DashboardCard';

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;

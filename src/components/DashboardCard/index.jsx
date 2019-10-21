import React from 'react';

// styles
import './DashboardCard.scss'

// external libraries
import PropTypes from 'prop-types'; 

export const DashboardCard = ({ tripNum, tripName, className}) => {
  return (
    <div className="dashboard-card">
      <div className={className}>
        <h1>{tripNum}</h1>
        <p>{tripName}</p>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
  tripNum: PropTypes.number,
  tripName: PropTypes.string,
  className: PropTypes.string
}

export default DashboardCard;

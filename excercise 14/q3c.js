import React from "react";

const RecentActivities = ({ activities }) => {
  return (
    <>
      <h3>Activity Log</h3>
      <ul>
        {activities.map((activity, idx) => (
          <li key={idx}>{activity}</li>
        ))}
      </ul>
    </>
  );
};

export default RecentActivities;
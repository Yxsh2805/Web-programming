import React from "react";

const ProfileDetails = ({ name, email, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>Contact:</strong> {email}</p>
      <p><strong>About Me:</strong> {description}</p>
    </div>
  );
};

export default ProfileDetails;



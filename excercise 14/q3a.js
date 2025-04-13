import React from "react";
import DisplayPicture from "./DisplayPicture";
import ProfileDetails from "./ProfileDetails";
import RecentActivities from "./RecentActivities";

const UserProfile = () => {
  const profile = {
    fullName: "Jane Smith",
    contact: "jane.smith@example.com",
    about: "Software engineer specializing in front-end development.",
    avatar: "./src/assets/avatar.jpg",
    activityFeed: [
      "Refactored a React project.",
      "Started a new UI/UX course.",
      "Published a new blog post on JavaScript best practices."
    ]
  };

  return (
    <>
      <h1>Profile Overview</h1>
      <DisplayPicture image={profile.avatar} />
      <ProfileDetails name={profile.fullName} email={profile.contact} description={profile.about} />
      <RecentActivities activities={profile.activityFeed} />
    </>
  );
};

export default UserProfile;

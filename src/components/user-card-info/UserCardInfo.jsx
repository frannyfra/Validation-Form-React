import React from "react";
import "./../user-card-info/userCardInfo.css";

const UserCardInfo = ({ userInfo, phoneNumber }) => {
  return (
    <>
      {userInfo ? (
        <div className="user-card-info-container">
          <h1>Summary</h1>
          <p>
            Name:
            <span>{userInfo.name}</span>
          </p>
          <p>
            Surname:
            <span>{userInfo.surname}</span>{" "}
          </p>
          <p>
            Phone Number:
            <span>{phoneNumber}</span>{" "}
          </p>
          <p>
            Email:
            <span>{userInfo.email}</span>{" "}
          </p>
          <p>
            Date of Birth:
            <span>{userInfo.dateOfBirth}</span>{" "}
          </p>
          <p>{`Your are ${userInfo.age} years old`}</p>
          <p>
            Please verify your
            <br /> information and submit when you are ready! <br />
            Thanks{" "}
          </p>
        </div>
      ) : null}
    </>
  );
};

export default UserCardInfo;

import React, { useState } from "react";
import FullName from "./FullNameDisplay";

const FullNameDisplay = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const isLetter = (str) => {
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLetter(firstName) || !isLetter(lastName)) {
      setFullName("");
    } else {
      setFullName(`${firstName} ${lastName}`);
    }
  };
  const isFormValid =
    firstName.trim !== "" &&
    lastName.trim !== "" &&
    isLetter(firstName) &&
    isLetter(lastName);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="last">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>

          {fullName && (
            <p style={{ marginTop: "1rem" }}>Full Name: {fullName}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FullNameDisplay;

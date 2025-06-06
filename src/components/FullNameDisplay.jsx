import React, { useState } from "react";
import FullName from "./FullNameDisplay";

const FullNameDisplay = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(` ${firstName} ${lastName}`);
    }
  };
  return (
    <div>
      <div className="main-heading">
        <form onSubmit={handleSubmit}>
          <h1>Full Name Display</h1>
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
          <div>
            <button type="submit">Submit</button>
          </div>
          {fullName && (
            <div style={{ marginTop: "1rem" }}>
              <span>FullName:</span>
              {fullName}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FullNameDisplay;

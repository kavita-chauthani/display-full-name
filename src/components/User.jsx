import React, { useState } from "react";

const User = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={!firstName || !lastName}>
          Submit
        </button>

        {fullName && <p style={{ marginTop: "1rem" }}>Full Name: {fullName}</p>}
      </form>
    </>
  );
};

export default User;

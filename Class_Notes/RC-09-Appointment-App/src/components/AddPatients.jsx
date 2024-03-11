import React, { useState } from "react";

const AddPatients = ({ patients, setPatients }) => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setPatients([...patients,{id:7, patientName:addEventListener, day:3, myDoctor:"audrey"}])
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Patient Information</label>
          <input type="text" onChange={(e) => setPatientName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="time">Date & Time</label>
          <input
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="doc">
            <span></span> icin kayit olustur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatients;

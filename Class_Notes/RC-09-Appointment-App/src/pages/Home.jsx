import React, { useState } from "react";
import { patientsData, doctorsData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatients from "../components/AddPatients";
const Home = () => {
  const [doctors, setDoctors] = useState(doctorsData);
  const [patients, setPatients] = useState(patientsData);
  return (
    <div>
      <div>
        <header>
          <h1>Hospital</h1>

          <div className="dr-container">
            {doctors.map((dr) => (
              <div key={dr.id} className="dr-info ">
                <img
                  className="btn"
                  src={dr.doctorImg}
                  width="180px"
                  height="150px"
                  alt=""
                />
                <h4>{dr.doctorName}</h4>
              </div>
            ))}
          </div>
        </header>

        <AddPatients patients={patients} setPatients={setPatients} />
      </div>

      <PatientList patients={patients} setPatients={setPatients} />
    </div>
  );
};

export default Home;

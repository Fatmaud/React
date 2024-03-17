import React from "react";
import { Container } from "react-bootstrap";
import notFound from "../img/notFound.jpeg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <img src={notFound} alt="" width="450px" />

      <div>
        <button className="btn btn-success mt-4" onClick={() => navigate("/")}>
          GO HOME
        </button>
      </div>
    </Container>
  );
};

export default NotFound;

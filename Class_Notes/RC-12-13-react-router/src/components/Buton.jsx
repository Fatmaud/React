import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Buton = () => {
  let navigate = useNavigate();

  return (
    <div className="text-center">
      <Button
        className="btn btn-danger p-2 px-4 m-3"
        onClick={() => navigate("/login")}
      >
        LOGIN
      </Button>
      <Button className="btn btn-danger p-2 px-4 m-3">CLOSE</Button>
      <Button className="btn btn-danger p-2 px-4 m-3">DELETE</Button>
    </div>
  );
};

export default Buton;

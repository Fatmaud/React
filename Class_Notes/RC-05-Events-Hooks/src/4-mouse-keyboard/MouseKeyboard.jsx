import React, { useState } from "react";
import { FaGooglePlus, FaReact } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
const MouseKeyboard = () => {
  const [xEkseni, setXekseni] = useState(0);
  const [yEkseni, setYekseni] = useState(0);

  const mouseEvent = (e) => {
    //console.log(e);
    setXekseni(e.pageX);
    setYekseni(e.pageY);
  };

  return (
    <div className="container text-center mt-4 d-flex flex-column align-items-center">
      <h2 className="text-danger mt-4">MOUSE EVENTS</h2>
      <p>X ve Y</p>
      <p className="text-danger fw-bold">
        {xEkseni} - {yEkseni}
      </p>
      <div
        className="bg-success text-light w-50 p-4 mb-4"
        id="coord"
        onMouseMove={mouseEvent}
      >
        <HiOutlineDesktopComputer /> KOORDİNATLAR <FaReact /> <FaGooglePlus />
      </div>
      <div>
        <h2 className="text-danger mt-4">
          Keyboard-Clipboard Events <span className="text-primary">{}</span>
        </h2>

        <input type="text" className="form-control"
        onKeyDown={}
         />
      </div>
      {/* <div id="todo-1" className="bg-success mt-2 text-light w-50 p-4">
        todo item 1
      </div> */}
    </div>
  );
};

export default MouseKeyboard;

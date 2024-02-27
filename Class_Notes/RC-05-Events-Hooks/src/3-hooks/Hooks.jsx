import React from "react";
import { useState } from "react";

const Hooks = () => {
  //! usestate hook u her zaman en üste yazilmali
  //******** */
  const [sayac, setSayac] = useState(0);
  //let sayac=0;
  //******** */

  //???????????
  const [kisi, setKisi] = useState({
    isim: "saban",
    meslek: "developer",
    yas: 50,
    renk: "red",
  });
  //???????????

  //???????
  // const handleSwap=()=>{
  //     setKisi({
  //         isim: "emre",
  //         meslek: "full-stack",
  //         yas: 35,
  //         renk: "blue",
  //     })
  // }

  //******** */
  const arttir = () => {
    setSayac(1);
  };
  //******** */

  return (
    <div className="container text-center">
      <h2>**************</h2>
      <h2>**************</h2>
      <h1>USESTATE</h1>

      <h2>COUNT: {sayac}</h2>

      <button onClick={arttir} className="btn btn-primary">
        ARTTIR
      </button>

      <h1>******************************</h1>
      <div>
        <h1>Object ile UseState Kullanimi</h1>
        <h2 className="text-danger">{kisi.isim}</h2>
        <h3 className="text-warning">{kisi.meslek}</h3>
        <h5 className="text-success">{kisi.yas}</h5>

        <button className="btn m-4 p-4">TOGGLE DEGISTIR</button>
      </div>
    </div>
  );
};

export default Hooks;

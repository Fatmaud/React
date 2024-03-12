import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectAxiosFetch = () => {
  //!1.yol fetch then yapısı (chain): bu yolda fetchi useEffect le sarmalladik.Bu sekilde yapilabilir.
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setPeople(data));
  // }, []);

  //!2.yol: fetch async await:bu yolda fetch i fonksiyonla sarmallayip o fonksiyonu esuEffect icinde cagirdik. Bu da kullanilabilir.
  // const getData = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();
  //   setPeople(data);
  //   //console.log(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  //!3.yol: axios ile:
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((veri) => setPeople(veri.data));
  // }, []);

  //!4.yol: axios async await:

  return (
    <div className="container text-center mt-4">
      {/* <div className="row">
        {people.map(({ name, username, phone, id }) => {
          return (
            <div key={id} className="col-12 col-sm-6 col-md-4">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name} `}
              />
              <h1>{name}</h1>
              <h6>{username}</h6>
              <h6>{phone}</h6>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default UseEffectAxiosFetch;

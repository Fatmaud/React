import React from "react";
import resim2 from "../img/Zoom_17.jpg";

const Msg = () => {
  //!javascript alani

  //!return un alti react alani (jsx alani)⬇️⬇️⬇️
  return (
    <div>
      <h2>burasi msg sayfasi</h2>
      <p>Hosgeldin React</p>

      <img
        src="https://www.istockphoto.com/de/foto/fotografenarbeitsplatz-gm639695818-115447955?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fde%2Fs%2Ffotos%2Fphoto&utm_medium=affiliate&utm_source=unsplash&utm_term=photo%3A%3A%3A"
        alt=""
      />

      <img src="{resim2}" alt="" />
      <img src="./assets/background.jpg" alt="" height="500px" />
    </div>
  );
};

export default Msg;

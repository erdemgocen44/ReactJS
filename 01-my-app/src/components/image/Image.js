import React from "react";
import image2 from "../../assets/img/2.jpg";

const Image = () => {
  return (
    <div>
      <div>
        <h2>Statik Yöntem</h2>
        <img src="assets/img/1.jpg" />
      </div>
      <div>
        <h2>Import Yöntemi</h2>
        <img src={image2} />
      </div>
      <div>
        <h2>Require yöntemi</h2>
        <img src={require("../../assets/img/3.jpg").default} />
      </div>
    </div>
  );
};

export default Image;

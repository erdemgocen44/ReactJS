import React, { useState } from "react";
import { Button } from "react-bootstrap";
//! 1 .öncelikle useState import edilmeli

const State = () => {
  //! 2. useState tanımlanmalı
  //! sayac değişkeni degeri saklar, setSayac ise değeri değiştiren metotdur
  const [sayac, setSayac] = useState(0);

  const artir = () => {
    setSayac(sayac + 1);
  };

  return (
    <div>
      <h1>Sayac Değeri : {sayac}</h1>
      <Button variant="info" onClick={artir}>
        Artır
      </Button>
    </div>
  );
};

export default State;

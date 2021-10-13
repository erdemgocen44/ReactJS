import React, { useState, useEffect } from "react";

const ChangeTitle = () => {
  const [sayac, setSayac] = useState(0);
  const artir = () => {
    setSayac(sayac + 1);
  };

  useEffect(() => {
    document.title = `${sayac} kere tıklandı`;
  }, [sayac]);

  return (
    <div>
      <h2>{sayac} kere tıkladın</h2>
      <button onClick={artir}>Tıkla</button>
    </div>
  );
};

export default ChangeTitle;

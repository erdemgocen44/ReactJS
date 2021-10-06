const Jsx = () => {
  const kullanici = {
    ad: "Halide",
    soyad: "Dila",
    email: "halidedila@gmail.com",
    telefon: "543543554",
  };

  return (
    <div>
      <div>
        <h1>
          Merhaba {kullanici.ad} {kullanici.soyad}
        </h1>
      </div>
      <div>Eposta :{kullanici.email}</div>
    </div>
  );
};

export default Jsx;

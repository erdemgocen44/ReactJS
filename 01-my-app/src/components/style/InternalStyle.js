const InternalStyle = () => {
  const styleParagraph = {
    fontSize: "2rem",
    color: "orange",
  };

  const styleKendim = {
    fontSize: "3rem",
    color: "green",
  };
  return (
    <div style={styleParagraph}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa itaque
      harum ad alias maiores voluptatum unde explicabo saepe omnis dolorem, quos
      atque tempore{" "}
      <span style={styleKendim}>
        {" "}
        recusandae inventore sapiente necessitatibus tempora enim aperiam?
      </span>
    </div>
  );
};

export default InternalStyle;

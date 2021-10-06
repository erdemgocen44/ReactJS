const InlineStyle = () => {
  return (
    <div
      style={{
        fontSize: "3rem",
        color: "red",
        fontWeight: "bold",
        border: "2px solid black",
        backgroundColor: "lime",
      }}
    >
      Bugün <span style={{ color: "yellow" }}> hava </span>serin
    </div>
  );
};

export default InlineStyle;

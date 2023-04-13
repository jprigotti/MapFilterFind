import React from "react";

const styleCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid white",
  borderRadius: "10px",
  width: "300px",
};

const Card = ({ user }) => {
  return (
    <div style={styleCard}>
      <h1>{user.id}</h1>
      <h2>{user.nombre}</h2>
      <h5>{user.apellido}</h5>
    </div>
  );
};

export default Card;

import React from "react";

const CharactersDetail = ({ name, image }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
    </div>
  );
};

export default CharactersDetail;

import React from "react";
import { Link } from "react-router-dom";

const CharactersList = ({ characters }) => {
  return (
    <ul>
      {characters.map((character, index) => (
        <li key={index}>
          <Link to={`/rickandmorty/${character.id}`}>{character.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CharactersList;

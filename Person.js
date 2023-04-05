import React from "react";

function Person({ name, age, index, removePerson }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button onClick={() => removePerson(index)}>Remove</button>
      </td>
    </tr>
  );
}

export default Person;

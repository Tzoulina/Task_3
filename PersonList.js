import React, { useState } from "react";
import Person from "./Person";

function PersonList() {
  const [persons, setPersons] = useState([{ name: "John", age: 30 }]);

  const addPerson = (name, age) => {
    const newPerson = { name, age };
    setPersons([...persons, newPerson]);
  };

  const removePerson = (index) => {
    setPersons(persons.filter((person, i) => i !== index));
  };

  return (
    <div>
      <h2>Person List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <Person
              key={index}
              index={index}
              name={person.name}
              age={person.age}
              removePerson={removePerson}
            />
          ))}
        </tbody>
      </table>
      <AddPersonForm addPerson={addPerson} />
    </div>
  );
}

function AddPersonForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addPerson(name, age);
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Person</h3>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default PersonList;

import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/00");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Date Town Village Country</p>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {`${user.id}  ${user.Date}  ${user.Timing}  ${user.Brief_Description_of_sighting}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

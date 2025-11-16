import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState(null); // null = not loaded
  const [error, setError] = useState(null);

  useEffect(() => {
    let canceled = false;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => {
        if (!canceled) setUsers(data);
      })
      .catch((err) => {
        if (!canceled) setError(err.message || "Fetch error");
      });

    return () => (canceled = true);
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (users === null) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Users</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Email</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{u.name}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{u.email}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

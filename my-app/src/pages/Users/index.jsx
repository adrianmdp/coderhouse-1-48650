import { useEffect } from "react";
import { useState } from "react";
import { usersService } from "../../services/users";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersService.getByName("Pepe").then((data) => setUsers(data));
  }, []);

  console.log(users);

  return (
    <>
      <h1>Usuarios</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Contraseña</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export { Users };

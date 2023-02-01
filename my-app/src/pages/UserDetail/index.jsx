import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usersService } from "../../services/users";

const UserDetail = () => {
  const [user, setUser] = useState();

  const { userId } = useParams();

  useEffect(() => {
    usersService.get(userId).then((data) => setUser(data));
  }, [userId]);

  return <div>Nombre: {user && user.name}</div>;
};

export { UserDetail };

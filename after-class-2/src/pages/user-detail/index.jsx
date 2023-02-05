import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  return <div>Detalle de usuario {id}</div>;
};

export { UserDetail };

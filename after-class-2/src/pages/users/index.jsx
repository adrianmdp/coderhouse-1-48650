import { useEffect, useState } from "react";
import { SearchForm, UsersCard } from "../../components";
import { inhabitants, hair_colors } from "../../data/inhabitants";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState(inhabitants);
  const [criteria, setCriteria] = useState();

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams({
    name: "",
    hair_color: "",
  });

  const removeUser = (event, id) => {
    event.stopPropagation();
    const newArray = users.filter((user) => user.id !== id);
    setUsers(newArray);
  };

  // Este useEffect responde cuando cambia searchParam (quien tiene los query params).
  // Osea que cada vez que un parámetro de consulta cambia, se ejectua el código que enviamos
  // como callback
  useEffect(() => {
    let newArray = inhabitants.filter(
      (inhab) =>
        inhab.name.includes(searchParams.get("name")) ||
        searchParams.get("name") === ""
    );

    newArray = newArray.filter(
      (inhab) =>
        searchParams.get("hair_color") === inhab.hair_color ||
        searchParams.get("hair_color") === ""
    );
    setUsers(newArray);
  }, [searchParams]);

  // Este useEffect responde cuando cambia query (el estado que guarda lo que el cliente escribe)
  // en el input.
  // Cada vez que query cambia, se actualiza el estado de parametros de consulta (searchParam)
  useEffect(() => {
    setSearchParams(criteria);
  }, [criteria, setSearchParams]);

  return (
    <Container>
      <div className="my-4">
        <SearchForm onChange={setCriteria} />
      </div>
      <p>
        {searchParams.get("name")} - {searchParams.get("hair_color")}
      </p>
      <Row>
        {users.map(
          ({ id, thumbnail, name, age, weight, height, hair_color }) => {
            return (
              <Col key={name} md={4}>
                <UsersCard
                  id={id}
                  thumbnail={thumbnail}
                  name={name}
                  age={age}
                  weight={weight}
                  height={height}
                  hair_color={hair_color}
                  onClick={() => navigate(`/users/${id}`)}
                  onDelete={removeUser}
                />
              </Col>
            );
          }
        )}
      </Row>
    </Container>
  );
};

export { Users };

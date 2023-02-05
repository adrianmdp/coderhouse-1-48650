import { Button, Card } from "react-bootstrap";

const UsersCard = ({
  id,
  thumbnail,
  name,
  age,
  weight,
  height,
  hair_color,
  onDelete,
  onClick,
}) => {
  return (
    <Card onClick={onClick}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ul>
          <li>age: {age}</li>
          <li>weight: {weight}</li>
          <li>height: {height}</li>
          <li>hair_color: {hair_color}</li>
        </ul>
        <Button variant="primary" onClick={(e) => onDelete(e, id)}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export { UsersCard };

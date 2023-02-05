import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { hair_colors } from "../../data/inhabitants";

const SearchForm = ({ onChange }) => {
  const [query, setQuery] = useState({
    name: "",
    hair_color: "",
  });

  useEffect(() => {
    onChange(query);
  }, [onChange, query]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="name"
          placeholder="Ingresar texto para buscar por nombre"
          value={query.name}
          onChange={(e) =>
            setQuery((prevState) => ({ ...prevState, name: e.target.value }))
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>color de pelo</Form.Label>
        <Form.Select
          value={query.hair_color}
          onChange={(e) =>
            setQuery((prevState) => ({
              ...prevState,
              hair_color: e.target.value,
            }))
          }
        >
          <option value="">Seleccionar para buscar por color de pelo</option>
          {hair_colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export { SearchForm };

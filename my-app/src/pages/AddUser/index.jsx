import { useState } from "react";
import { defaultValues } from "./defaultValues";

const AddUser = () => {
  const [fields, setFields] = useState(defaultValues);

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={fields.name}
          onChange={(e) =>
            setFields((state) => ({ ...state, name: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="pass"
          value={fields.email}
          onChange={(e) =>
            setFields((state) => ({ ...state, email: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor="pass">Contraseña</label>
        <input
          type="passwprd"
          name="pass"
          id="pass"
          value={fields.pass}
          onChange={(e) =>
            setFields((state) => ({ ...state, pass: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor="language">Qué lenguaje te gusta más?</label>
        <select
          name="language"
          id="language"
          value={fields.language}
          onChange={(e) =>
            setFields((state) => ({ ...state, language: e.target.value }))
          }
        >
          <option value="js">Javascript</option>
          <option value="java">Java</option>
          <option value="net">.Net</option>
          <option value="python">Python</option>
          <option value="go">Go!</option>
          <option value="php">PHP</option>
        </select>
      </div>
      <button>Enviar</button>
    </form>
  );
};

export { AddUser };

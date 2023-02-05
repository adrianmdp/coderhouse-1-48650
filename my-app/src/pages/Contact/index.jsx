import { useEffect } from "react";
import { useState } from "react";

const Contact = () => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setTest((prevState) => prevState + 1);
      console.log("Hola mundo");
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleSubmit = (event) => {};

  return (
    <form onSubmit={handleSubmit}>
      <h1>{test}</h1>
      <div>
        <label htmlFor=""></label>
        <input
          type="text"
          name="name"
          value={test}
          onChange={(e) => setTest(e.target.value)}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export { Contact };

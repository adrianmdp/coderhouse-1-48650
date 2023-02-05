import { useState } from "react";
import { Select } from "../../components";

const Home = () => {
  const [option, setOption] = useState(1);
  const [options, setOptions] = useState([
    { value: 1, text: "azul" },
    { value: 2, text: "Rojo" },
  ]);

  const optionSelected = (value) => {
    setOption(value);
  };

  return (
    <>
      {option}
      <br />
      <Select options={options} onSelect={optionSelected} defaultOption={1} />
    </>
  );
};

export { Home };

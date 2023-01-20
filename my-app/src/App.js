import logo from './logo.svg';
import './App.css';
import { Button, Modal, Icon } from './components'
import { useState } from 'react';


function App() {

  const [name, setName] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      

      <button onClick={() => setName(name === "" ? "Adrián Solimano" : "")}>
        botón estandard
      </button>

      <Button className="btn btn-primary" type="submit" icon={<Icon className="icon icon-trash" />}>
        {name}
      </Button>

      { name === "" ? <Modal /> : null }

      </header>

      {/* <Button text="Enviar" className="btn btn-secondary" type="submit" />
      <Button text="Limpiar" className="btn btn-light" type="reset" /> */}
    </div>
  );
}

export default App;

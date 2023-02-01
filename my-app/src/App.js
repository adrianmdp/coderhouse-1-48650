import "./App.css";
import { Contact, Home, UserDetail, Users } from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainNav } from "./components";

function App() {
  return (
    <BrowserRouter>
      <MainNav />

      <hr />
      <ul>
        <li>
          <Link to="/users">Usuarios</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { AddUser, Contact, Home, UserDetail, Users } from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainNav, Header } from "./components";
import { AddTask } from "./pages";
import { AuthProvider } from "./contexts";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
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
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

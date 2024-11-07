import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para / que renderiza el componente Welcome */}
        <Route path="/" element={<Menu />} />
        {/* Ruta para /home que renderiza el componente Home */}
        <Route path="/home" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;

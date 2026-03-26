import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import LivroForm from "./components/LivroForm";
import LivroList from "./components/LivroList";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<LivroList />} />
          <Route path="/novo" element={<LivroForm />} />
          <Route path="/editar/:id" element={<LivroForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./App.css"

import Favoritos from "./Favoritos"
import Home from "./Home"
import Informativa from "./Informativa"
import Original from "./Original"
import Usuario from "./Usuario"
import Pelicula from "./Peliculas"

function App() {
  return (
    <Router>
      <nav className="c-menu">
        <Link to="/">Home</Link>
        <Link to="/informativa">Informativa</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/original">Original</Link>
        <Link to="/usuario">Usuario</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/original" element={<Original />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/pelicula/:id" element={<Pelicula />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}

export default App
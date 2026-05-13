import { Routes, Route } from "react-router-dom"
import "./App.css"

import Favoritos from "./Favoritos"
import Home from "./Home"
import Informativa from "./Informativa"
import Original from "./Original"
import Usuario from "./Usuario"
import Pelicula from "./Peliculas"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/informativa" element={<ProtectedRoute><Informativa /></ProtectedRoute>} />
        <Route path="/favoritos" element={<ProtectedRoute><Favoritos /></ProtectedRoute>} />
        <Route path="/original" element={<ProtectedRoute><Original /></ProtectedRoute>} />
        <Route path="/usuario" element={<ProtectedRoute><Usuario /></ProtectedRoute>} />
        <Route path="/pelicula/:id" element={<ProtectedRoute><Pelicula /></ProtectedRoute>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App
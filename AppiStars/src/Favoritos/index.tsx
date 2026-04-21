import { useEffect, useState } from "react"

interface Film {
  uid: string
  title: string
  director: string
  release_date: string
}

function Favoritos() {
  const [favoritos, setFavoritos] = useState<Film[]>([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favoritos") || "[]")
    setFavoritos(data)
  }, [])

  const eliminar = (uid: string) => {
    const nuevos = favoritos.filter(f => f.uid !== uid)
    setFavoritos(nuevos)
    localStorage.setItem("favoritos", JSON.stringify(nuevos))
  }

  return (
    <div className="contenedor">
      <h1>Mis Favoritos</h1>

      {favoritos.length === 0 ? (
        <p>No tienes favoritos aún</p>
      ) : (
        <table className="tabla">
          <thead>
            <tr>
              <th>Título</th>
              <th>Director</th>
              <th>Fecha</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {favoritos.map((film) => (
              <tr key={film.uid}>
                <td>{film.title}</td>
                <td>{film.director}</td>
                <td>{film.release_date}</td>
                <td>
                  <button onClick={() => eliminar(film.uid)}>
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Favoritos
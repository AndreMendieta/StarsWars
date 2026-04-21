import "./style.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Film {
  uid: string
  title: string
  director: string
  release_date: string
}

function Home() {
  const [films, setFilms] = useState<Film[]>([])
  const [busqueda, setBusqueda] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/films")
        const data = await res.json()

        const peliculas: Film[] = (data.result || []).map((item: any) => ({
          uid: item.uid,
          title: item.properties.title,
          director: item.properties.director,
          release_date: item.properties.release_date,
        }))

        setFilms(peliculas)
      } catch (error) {
        console.error("Error cargando películas:", error)
      }
    }

    fetchData()
  }, [])

  const agregarFavorito = (film: Film) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]")

    const existe = favoritos.find((f: Film) => f.uid === film.uid)
    if (!existe) {
      favoritos.push(film)
      localStorage.setItem("favoritos", JSON.stringify(favoritos))
    }
  }

  const filmsFiltrados = films.filter((film) =>
    busqueda.length < 3
      ? true
      : film.title.toLowerCase().includes(busqueda.toLowerCase()) ||
        film.director.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="home">
      <div className="hero">
        <h1>Star Wars Films</h1>
        <p>Explora películas, directores y fechas</p>
      </div>

      <div className="contenedor">
        <input
          type="text"
          placeholder="Buscar por título o director..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="input-busqueda"
        />

        <table className="tabla">
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Director</th>
              <th>Fecha</th>
              <th>Fav</th>
            </tr>
          </thead>
          <tbody>
            {filmsFiltrados.map((film, index) => (
              <tr key={film.uid} className="fila">
                <td>{index + 1}</td>

                <td
                  className="clickable"
                  onClick={() => navigate(`/pelicula/${film.uid}`)}
                >
                  {film.title}
                </td>

                <td>{film.director}</td>
                <td>{film.release_date}</td>

                <td>
                  <button
                    className="btn-fav"
                    onClick={() => agregarFavorito(film)}
                  >
                    ⭐
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
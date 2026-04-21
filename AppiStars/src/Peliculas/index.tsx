import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

interface FilmDetail {
  title: string
  director: string
  producer: string
  release_date: string
  opening_crawl: string
}

function Pelicula() {
  const { id } = useParams<{ id: string }>()
  const [film, setFilm] = useState<FilmDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const res = await fetch(`https://www.swapi.tech/api/films/${id}`)
        const data = await res.json()

        console.log("DATA API:", data) // útil para depurar

        const props = data?.result?.properties

        if (!props) {
          throw new Error("No se encontraron datos de la película")
        }

        const pelicula: FilmDetail = {
          title: props.title,
          director: props.director,
          producer: props.producer,
          release_date: props.release_date,
          opening_crawl: props.opening_crawl,
        }

        setFilm(pelicula)
      } catch (error) {
        console.error("Error cargando película:", error)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchFilm()
  }, [id])

  // Estado de carga
  if (loading) {
    return <h2>Cargando película...</h2>
  }

  // Si no hay datos
  if (!film) {
    return <h2>No se encontró la película</h2>
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{film.title}</h1>

      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Productor:</strong> {film.producer}</p>
      <p><strong>Fecha de estreno:</strong> {film.release_date}</p>

      <h3>Descripción</h3>
      <p>{film.opening_crawl}</p>
    </div>
  )
}

export default Pelicula
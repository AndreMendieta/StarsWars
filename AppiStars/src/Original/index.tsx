import { useState } from "react"
import "./style.css"

function Original() {
  const preguntas = [
    {
      texto: "¿Quién es el padre de Luke Skywalker?",
      opciones: ["Yoda", "Obi-Wan", "Darth Vader", "Han Solo"],
      correcta: "Darth Vader",
    },
    {
      texto: "¿Cómo se llama el droide azul?",
      opciones: ["C-3PO", "R2-D2", "BB-8", "K-2SO"],
      correcta: "R2-D2",
    },
    {
      texto: "¿Quién entrenó a Luke?",
      opciones: ["Yoda", "Leia", "Anakin", "Snoke"],
      correcta: "Yoda",
    },
    {
      texto: "¿Cuál es el arma de los Jedi?",
      opciones: ["Blaster", "Sable de luz", "Arco", "Lanza"],
      correcta: "Sable de luz",
    },
    {
      texto: "¿Quién es el emperador?",
      opciones: ["Vader", "Palpatine", "Snoke", "Kylo Ren"],
      correcta: "Palpatine",
    },
  ]

  const [index, setIndex] = useState(0)
  const [resultado, setResultado] = useState("")
  const [puntaje, setPuntaje] = useState(0)

  const verificar = (opcion: string) => {
    if (opcion === preguntas[index].correcta) {
      setResultado("Correcto")
      setPuntaje(puntaje + 1)
    } else {
      setResultado("Incorrecto")
    }
  }

  const siguiente = () => {
    setIndex((prev) => prev + 1)
    setResultado("")
  }

  const reiniciar = () => {
    setIndex(0)
    setPuntaje(0)
    setResultado("")
  }

  return (
    <div className="original">
      <h1>Trivia Star Wars</h1>

      <div className="card">
        {index < preguntas.length ? (
          <>
            <p>{preguntas[index].texto}</p>

            <div className="opciones">
              {preguntas[index].opciones.map((op) => (
                <button key={op} onClick={() => verificar(op)}>
                  {op}
                </button>
              ))}
            </div>

            {resultado && <p className="resultado">{resultado}</p>}

            <p>Puntaje: {puntaje}</p>

            <button onClick={siguiente}>Siguiente</button>
          </>
        ) : (
          <>
            <h2>Juego terminado</h2>
            <p>Puntaje final: {puntaje}</p>
            <button onClick={reiniciar}>Reiniciar</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Original
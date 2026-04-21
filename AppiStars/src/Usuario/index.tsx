import "./style.css"

function Usuario() {
  return (
    <div className="usuario">
      <h1>Sección Usuario</h1>

      <div className="card-usuario">
        <h2>Profe teacher</h2>

        <p className="mensaje">
          eso no nos lo ha explicado 
        </p>

        <p className="frase">
          "Cuando el código falla... es por que el profe se pone a ver el partido de millos"
        </p>

        <img
          src="https://i.imgflip.com/4/3oevdk.jpg"
          alt="meme star "
          className="meme"
        />

        <p className="extra">
          "Siento una perturbación en la Fuerza... como si muchos estudiantes no entendieran ni mileda jajajaja."
        </p>
      </div>
    </div>
  )
}

export default Usuario
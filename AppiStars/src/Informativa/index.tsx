import "./style.css"

function Informativa() {
  return (
    <div className="info">

      <h1 className="titulo">Universo Star Wars</h1>

      <div className="grid">

        {/* INTRO */}
        <div className="card">
          <h2>Introducción</h2>
          <p>
            Star Wars es una saga de ciencia ficción creada por George Lucas.
            Combina aventura, tecnología y una historia profunda sobre el bien y el mal.
          </p>
        </div>

        {/* PELÍCULAS */}
        <div className="card">
          <h2>Películas</h2>
          <p>
            La saga se divide en tres trilogías:
          </p>
          <ul>
            <li>Trilogía original (1977-1983)</li>
            <li>Precuelas (1999-2005)</li>
            <li>Secuelas (2015-2019)</li>
          </ul>
        </div>

        {/* PERSONAJES */}
        <div className="card">
          <h2>Personajes</h2>
          <p><strong>Luke Skywalker:</strong> héroe Jedi</p>
          <p><strong>Darth Vader:</strong> villano icónico</p>
          <p><strong>Yoda:</strong> maestro Jedi</p>
          <p><strong>Leia:</strong> líder rebelde</p>
        </div>

        {/* LA FUERZA */}
        <div className="card">
          <h2>La Fuerza</h2>
          <p>
            Es una energía que conecta todo el universo.
            Los Jedi la usan para el bien y los Sith para el lado oscuro.
          </p>
        </div>

        {/* LADOS */}
        <div className="card">
          <h2>Lado Luminoso vs Oscuro</h2>
          <p><strong>Jedi:</strong> paz, control, sabiduría</p>
          <p><strong>Sith:</strong> poder, ira, dominación</p>
        </div>

        {/* CURIOSIDADES */}
        <div className="card">
          <h2>Curiosidades</h2>
          <ul>
            <li>Darth Vader fue inspirado en samuráis</li>
            <li>El sonido del sable es de un televisor</li>
            <li>Yoda casi fue interpretado por un mono</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Informativa
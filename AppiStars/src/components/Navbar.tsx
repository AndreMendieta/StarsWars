import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, signOut } = useAuth()

  return (
    <nav className="c-menu">
      <Link to="/">Home</Link>
      <Link to="/informativa">Informativa</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/original">Original</Link>
      <Link to="/usuario">Usuario</Link>

      {user ? (
        <div className="nav-user">
          <span className="nav-icon">👤 {user.email}</span>
          <button onClick={signOut} className="btn-logout">Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  )
}
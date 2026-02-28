import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Movie Explorer</h1>
      <p>Discover and save your favorite movies.</p>
      <nav>
        <Link to="/movies">Browse Movies</Link>
        <Link to="/favorites">My Favorites</Link>
      </nav>
    </div>
  )
}

export default Home

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Movie Explorer</h1>
      <p>Your personal movie database. Browse through a curated collection of top-rated films spanning decades of cinema.</p>

      <h2>What you can do</h2>
      <ul>
        <li>Search movies by title and sort by name, year, or rating</li>
        <li>View detailed information about each film</li>
        <li>Save your favorites — they persist even after you close the browser</li>
      </ul>

      <h2>Get started</h2>
      <p><Link to="/movies">Browse the full collection</Link> or check out your <Link to="/favorites">saved favorites</Link>.</p>
    </div>
  )
}

export default Home

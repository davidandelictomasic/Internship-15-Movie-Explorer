import { useState, useEffect } from 'react'
import moviesData from '../data/movies'

let cachedMovies = null

function useFetchMovies() {
  const [movies, setMovies] = useState(cachedMovies || [])
  const [loading, setLoading] = useState(!cachedMovies)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (cachedMovies) return

    const timeout = setTimeout(() => {
      try {
        cachedMovies = moviesData
        setMovies(moviesData)
        setLoading(false)
      } catch (err) {
        setError("Something went wrong, try again later.")
        setLoading(false)
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  return { movies, loading, error }
}

export default useFetchMovies

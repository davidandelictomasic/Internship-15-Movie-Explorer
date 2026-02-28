import { useParams, useNavigate } from 'react-router-dom'

function MovieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Movie Detail — {id}</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default MovieDetail

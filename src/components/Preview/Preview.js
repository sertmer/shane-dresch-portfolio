import './Preview.css';
import { Link } from 'react-router-dom';


export default function Preview({ ratio, id, title, stills }) {
  const images = stills.map((still, index) => {
    return (<img
      key={index}
      className={`still ${ratio}`}
      src={still}
      alt={`Still from ${title} video`}
    />)
  })
  return (
    <Link to={`/projects/${id}`}>
      <div className={`preview-stills-container ${ratio}`}>
        {images}
      </div>
    </Link>
  )
}


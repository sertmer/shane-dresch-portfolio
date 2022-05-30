import './Preview.css';
import { Link } from 'react-router-dom';


export default function Preview({ ratio, id, title, stills }) {
  const images = stills.map((still, index) => {
    const name = index === 1 ? <p>{title}</p> : null;

    return (
    <div>
    <img
      key={index}
      className={`still ${ratio}`}
      src={still}
      alt={`Still from ${title} video`}
    />
    {name}
    </div>)
  })
  return (
    <Link to={`/projects/${id}`}>
      <div className={`preview-stills-container ${ratio}`}>
        {images}
      </div>
    </Link>
  )
}
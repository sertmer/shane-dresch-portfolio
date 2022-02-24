import './Preview.css';
import { Link } from 'react-router-dom';


export default function Preview({ id, title, stills }) {
  const images = stills.map((still, index) => {
    const ratio = still.aspectRatio === '16:9' ? 'normal' : 'wide'
    return (<img
      key={index}
      className={`still ${ratio}`}
      src={still}
      alt={`Still from ${title} video`}
    />)
  })
  return (
    <Link to={`/projects/${id}`}>
      <div className='preview-stills-container'>
        {images}
      </div>
    </Link>
  )
}


// Project component renders Preview component
// each preview component displays three stills,
// but the whole container is a link to the individual Project(?) comp
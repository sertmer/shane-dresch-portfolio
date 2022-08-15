import './Preview.css';
import { Link } from 'react-router-dom';


export default function Preview({ ratio, id, title, stills }) {
  const images = stills.map((still, index) => {
   
    return (
      <div className='stills-container'>
        <img
          key={index}
          className={`still ${ratio} `}
          src={still}
          alt={`Still from ${title} video`}
        />
      </div>)
  })

  const titles = stills.map((still, index) => {
    const projectName = index === 1 ? <p>{title}</p> : null;
    return projectName
  })

  console.log(titles)
  return (
    <Link to={`/projects/${id}`} className='preview-container'> 
      {images}
      {titles}

    </Link>
  )
}

// name is IN the container, pushing the boxes

// re-add name
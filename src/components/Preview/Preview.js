import './Preview.css';


export default function Preview({title, stills}) {
  console.log(stills)
  const images = stills.map(still => <img className='still' src={still} alt={`Still image from ${title} video`}/>)
  return(
    <div className='preview-stills-container'>
      {images}
    </div>
  )
}


// Project component renders Preview component
// each preview component displays three stills,
// but the whole container is a link to the individual Project(?) comp
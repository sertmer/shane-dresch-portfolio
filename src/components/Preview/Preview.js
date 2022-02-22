import './Preview.css';


export default function Preview({ title, stills }) {
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
    <div className='preview-stills-container'>
      {images}
    </div>
  )
}


// Project component renders Preview component
// each preview component displays three stills,
// but the whole container is a link to the individual Project(?) comp
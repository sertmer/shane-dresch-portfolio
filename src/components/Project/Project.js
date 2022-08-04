import './Project.css';

export default function Project({title, embedLink, credits }) {
  const creditInfo = credits.map(credit => {
    return <p className='credits'>{credit}</p>
  })
  return (
    <div>
      <iframe width="1140" height="641" src={embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p className='project-video-title'>{title}</p>
      {creditInfo}
    </div>
  )

}
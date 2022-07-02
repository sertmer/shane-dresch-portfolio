import './Projects.css';
import Preview from '../Preview/Preview';
import projects from '../../data/projectData';

export default function Projects() {
  const images = projects.map(project => {
    return (
      <Preview ratio={project.aspectRatio} key={project.id} id={project.id} title={project.title} stills={project.stills} />
    )
  })


  
  return (
    <main>
      {images}
    </main>
  )
}



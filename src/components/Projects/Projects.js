import './Projects.css';
import Preview from '../Preview/Preview';
import projects from '../../data/projectData';

export default function Projects() {
  const previews = projects.map(project => {
    return (
      <Preview title={project.title} stills={project.stills} />
    )
  })

  return (
    <main>
      <p className='nav-tab'>PROJECTS</p>
      {previews}
    </main>
  )
}

// Project component renders Preview component
  // pass stills, title for each project as props to Preview
// each preview component displays three stills,
// but the whole container is a link to the individual Project(?) comp
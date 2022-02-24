import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects';
import Project from '../Project/Project';
import projectData from '../../data/projectData';
import Stills from '../Stills/Stills';
import Contact from '../Contact/Contact';
import Error from '../Error/Error';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/projects/:id' render={({ match }) => {
          const matchId = parseInt(match.params.id)
          const currentProject = projectData.find(project => project.id === matchId)
          return <Project {...currentProject}/>
        }}
        />
        <Route exact path='/stills' component={Stills} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/' component={Projects} />
        <Route path='*' component={Error} />
      </Switch>
    </div>
  );
}

export default App;

// don't need individual project path, just projects/id
//id is accessible in
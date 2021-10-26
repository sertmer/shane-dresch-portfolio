import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects';
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
        <Route exact path='/stills' component={Stills} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/' component={Projects} /> 
        <Route path='*' component={Error} />
      </Switch>
    </div>
  );
}

export default App;

// restructure HTML - <header> here in App, or in the component itself.
// which is better for screen reader
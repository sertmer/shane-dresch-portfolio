import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects';
import Stills from '../Stills/Stills';
import Contact from '../Contact/Contact';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/stills' component={Stills} />
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;

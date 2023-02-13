import './App.css';
import Nav from './Nav'
import Home from './Home';
import About from './About'
import Services from './Services'
import Contact from './Contact'
import {Route, useLocation} from 'react-router'
import SlideRoutes from 'react-slide-routes'



function App() {
  const location = useLocation();
  
 

  return (
    <div className="App">
      <Nav /> 
      <SlideRoutes location={location} duration={400}>
      <Route path='/' element={<Home exact Home={Home} />} /> 
      <Route path='/about' element={<About  />} /> 
      <Route path='/services' element={<Services  />} /> 
      <Route path='/contact' element={<Contact  />} /> 
      </SlideRoutes>
    </div>
  );
}

export default App;

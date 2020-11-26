import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './config/routes';

function App() {
  return (
    <Router>
      <div className= "site">
        <Navbar/>
        {routes}
      </div>
    </Router>
  );
}

export default App;

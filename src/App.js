import './App.css';

import Navbar from './Component/Navbar';
import Home from './pages/Home';


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='*' element={<Navigate to="/"/>}/>
    
      </Routes>

    </div>
    </Router>
  );
}

export default App;


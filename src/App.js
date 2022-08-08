import './App.css';

import Navbar from './Component/Navbar';
import Home from './pages/Home';
import SARdash from './pages/SAR/SARdash';


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
        <Route path='/sar-dash' element={<SARdash/>}/>
    
      </Routes>

    </div>
    </Router>
  );
}

export default App;


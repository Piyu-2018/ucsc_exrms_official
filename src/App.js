import './App.css';

import Home from './pages/Home';

import SARdash from './pages/SAR/SARdash';
import DirectorDash from './pages/Director/DirectorDash';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <Router>

    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path='*' element={<Navigate to="/"/>}/>
        <Route path='/sar-dash' element={<SARdash/>}/>
        <Route path='/directorDash' element={<DirectorDash/>}/>
    
      </Routes>
    

    </div>
    </Router>
  );
}

export default App;


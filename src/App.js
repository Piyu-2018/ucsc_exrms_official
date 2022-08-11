import './App.css';

import Home from './pages/Home';
import DirectorDash from './pages/Director/DirectorDash';
import MaDash from './pages/Ma/MaDash';


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
        <Route path='/directorDash' element={<DirectorDash/>}/>
        <Route path='/maDash' element={<MaDash/>}/>
    
      </Routes>

    </div>
    </Router>
  );
}

export default App;


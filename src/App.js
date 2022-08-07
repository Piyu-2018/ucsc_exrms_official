import './App.css';

import Navbar from './Component/Navbar';
import Home from './pages/Home';


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
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path='*' element={<Navigate to="/"/>}/>
    
      </Routes>

    </div>
    </Router>
  );
}

export default App;


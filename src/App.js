import './App.css';

import Home from './pages/Home';
import DirectorDash from './pages/Director/DirectorDash';

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
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='*' element={<Navigate to="/"/>}/>
        <Route path='/directorDash' element={<DirectorDash/>}/>
    
      </Routes>

    </div>
    </Router>
  );
}

export default App;


import './App.css';

import Home from './pages/Home';

import SARdash from './pages/SAR/SARdash';
import DirectorDash from './pages/Director/DirectorDash';
import DirectorUnder from './pages/Director/DirectorUnder';
import DirectorEnProgress from './pages/Director/DirectorEnProgress';
import DirectorRegProg from './pages/Director/DirectorRegProg';
import DirectorConfirmProg from './pages/Director/DirectorConfirmProg';
import DirectorTransProg from './pages/Director/DirectorTransProg';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from './pages/Login';
import LecturerAssignments from './pages/Lecturer/LecturerAssignments';
import LecAssignList from './pages/Lecturer/LecAssignList';

function App() {
  return (
    <Router>

    <div className="App">
      <Routes>
      
        

      </Routes>
    

    </div>
    </Router>
  );
}

export default App;
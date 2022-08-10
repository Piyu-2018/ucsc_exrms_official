import './App.css';

import Home from './pages/Home';
import DirectorDash from './pages/Director/DirectorDash';
import DirectorUnder from './pages/Director/DirectorUnder';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from './pages/Login';
import LecturerAssignments from './pages/Lecturer/LecturerAssignments';

function App() {
  return (
    <Router>

    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path='*' element={<Navigate to="/"/>}/>
        <Route path='/directorDash' element={<DirectorDash/>}/>
        <Route path='/directorUnder' element={<DirectorUnder/>}/>
        <Route path='/lecturer_assignments' element={<LecturerAssignments/>}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;


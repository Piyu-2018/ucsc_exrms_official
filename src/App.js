import './App.css';

import Home from './pages/Home';
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
        <Route path='/' exact element={<Home />}/>
        <Route path='*' element={<Navigate to="/"/>}/>

        <Route path='/login' exact element={<Login />}/>

        <Route path='/directorDash' element={<DirectorDash/>}/>
        <Route path='/directorUnder' element={<DirectorUnder/>}/>

        <Route path='/directorEnProgress' element={<DirectorEnProgress/>}/>
        <Route path='/directorRegProg' element={<DirectorRegProg/>}/>
        <Route path='/directorConfirmProg' element={<DirectorConfirmProg/>}/>
        <Route path='/directorTransProg' element={<DirectorTransProg/>}/>

        <Route path='/lecturer_assignments' element={<LecturerAssignments/>}/>
        <Route path='/lec_assign_list' element={<LecAssignList/>}/>

      </Routes>

    </div>
    </Router>
  );
}

export default App;
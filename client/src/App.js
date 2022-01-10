import './app.css';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
         <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<Protected />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>

  )
};

export default App;
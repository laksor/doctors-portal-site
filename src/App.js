import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import MakeAppointment from './Pages/MakeAppointment/MakeAppointment/MakeAppointment';
import Login from './Pages/Auth/Login/Login';
import SignUp from './Pages/Auth/SignUp/SignUp';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='about' element={<About></About>} />
        <Route path='appointment' element={
          <RequireAuth>
            <MakeAppointment></MakeAppointment>
          </RequireAuth>
        } />
        <Route path='login' element={<Login></Login>} />
        <Route path='signup' element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;

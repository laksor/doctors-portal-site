import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import MakeAppointment from './Pages/MakeAppointment/MakeAppointment/MakeAppointment';
import Login from './Pages/Auth/Login/Login';
import SignUp from './Pages/Auth/SignUp/SignUp';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Auth/RequireAdmin/RequireAdmin';

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
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        } >
        <Route index element={<MyAppointments></MyAppointments>}></Route>
        <Route path="review" element={<MyReview></MyReview>}></Route>
        <Route path="history" element={<MyHistory></MyHistory>}></Route>
        <Route path="users" element={
          <RequireAdmin>
            <Users></Users>
          </RequireAdmin>
        }></Route>
        </Route>
        <Route path='login' element={<Login></Login>} />
        <Route path='signup' element={<SignUp></SignUp>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='px-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='about' element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;

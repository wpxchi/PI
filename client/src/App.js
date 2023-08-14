import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './Views/LandindPage/Landing'
import HomePage from './Views/Home/HomePage';
import Detail from './Views/Detail/Detail';
import Forms from './Views/Forms/Forms'; 
function App() {
  return (
   <div>
    <Routes>
    <Route  path='/' element={<LandingPage/>}/>
    <Route path='/HomePage' element={<HomePage/>}/>
    <Route path='/Detail/:id' element={<Detail/>}/>
    <Route path='/Forms' element={<Forms/>}/>
    </Routes>
   </div>
  );
}

export default App;

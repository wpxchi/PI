
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Views/LandindPage/Landing';
import HomePage from './Views/Home/HomePage';
import Detail from './Views/Detail/Detail';
import Forms from './Views/Forms/Forms';
import { Login } from './Views/Login/Login';
import UserProfile from './Views/Profile/userProfile';
import Menu from './Components/Menu/Menu';
import Protection from './Components/ProtectionRoutes/ProtectionRoutes';
import ProtectionLogin from './Components/ProtectionRoutes/ProtectionLogin';


function App() {


  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Protection redirectPath="/Login" />}>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Forms" element={<Forms />} />
          <Route path="/Profile" element={<UserProfile />} />
        </Route>
        <Route element={<ProtectionLogin redirectPath={'/'} />}>
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
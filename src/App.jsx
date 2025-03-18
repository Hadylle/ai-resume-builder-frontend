import { Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Register from './register/register';
import Profile from './Profile/profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

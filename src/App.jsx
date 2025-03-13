import { Routes, Route } from 'react-router-dom';
import LoginForm from './Auth/LoginForm';
import RegisterForm from './Auth/RegisterForm';
import ProfilePage from './Profile/ProfilePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

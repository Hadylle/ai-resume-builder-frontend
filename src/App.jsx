import { Routes, Route } from 'react-router-dom';
import LoginForm from './Auth/LoginForm';
import RegisterForm from './Auth/RegisterForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home';
import SignInSignUpPage from './pages/SigninSignup';
import BuildResume from './pages/build-resume';
import CvMatchingPage from './pages/cv-matching';
import CvTailoringPage from './pages/cv-tailoring';
import CvFeedbackPage from './pages/cv-feedback';
import CvImprovePage from './pages/cv-improve';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInSignUpPage />} />
        <Route path="/build" element={<BuildResume />} />
        <Route path="/match" element={<CvMatchingPage />} />
        <Route path="/tailor" element={<CvTailoringPage />} />
        <Route path="/improve" element={<CvImprovePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

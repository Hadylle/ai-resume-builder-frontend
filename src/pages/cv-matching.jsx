import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import robotAnimation from '../assets/robot.json';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function CvMatchingPage() {
  const [showResult, setShowResult] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [jobText, setJobText] = useState('');

  const fullText = "Hello! Drop your CV and job offer below, and I’ll check if it’s a good match for you.";
  const animatedWords = fullText.split(" ");

  const mockResult = {
    similarity: 78,
    commonSkills: 'Java, Spring Boot, Git',
    missingSkills: 'AWS, Docker',
    explanation: '3 out of 5 required skills matched (60%).',
    jobFit: 'yes'
  };

  const handleCheckMatch = () => setShowResult(true);

  const handleFileChange = (e) => setCvFile(e.target.files[0]);

  return (
    <div className="min-h-[calc(100vh+200px)] flex flex-col bg-[#f9fbfc]">
  

      <main className="flex-1 max-w-6xl mx-auto py-12 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          
          {/* Lottie + animated text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
            <Lottie animationData={robotAnimation} loop className="max-w-md w-3/4 mx-auto" />

            <div className="mt-6 text-lg sm:text-xl font-semibold text-center flex flex-wrap justify-center gap-1 bg-clip-text text-transparent bg-gradient-to-r from-[#0e56a1] to-[#06dbb4]">
              {animatedWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </div>
          </div>

          {/* Upload + job description */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200">
            <div>
              <label className="block font-medium mb-2 text-gray-700">Upload your CV (PDF)</label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#0e56a1] file:text-white hover:file:bg-[#094284]"
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-gray-700">Paste Job Description</label>
              <textarea
                rows={5}
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
                placeholder="Enter job offer text here..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#06dbb4]"
              />
            </div>

            <div className="flex gap-4 justify-end pt-2">
              <button
                onClick={handleCheckMatch}
                className="bg-[#0e56a1] hover:bg-[#094284] text-white px-5 py-2 rounded-md shadow-sm"
              >
                ✅ Check Match
              </button>
              <button
                onClick={() => window.location.href = '/match-booster'}
                className="bg-[#ce0227] hover:bg-red-700 text-white px-5 py-2 rounded-md shadow-sm"
              >
                ✨ Boost Match
              </button>
            </div>
          </div>
        </div>

        {/* Result block */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-white rounded-lg shadow-lg p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-[#0e56a1] mb-4">📊 Matching Result</h2>
            <p className="text-lg text-gray-800 mb-2">
              <strong>Match Score:</strong>{' '}
              <span className="text-3xl font-bold text-green-600 animate-pulse">{mockResult.similarity}%</span>
            </p>
            <p className="text-gray-700"><strong>Common Skills:</strong> {mockResult.commonSkills}</p>
            <p className="text-gray-700"><strong>Missing Skills:</strong> {mockResult.missingSkills}</p>
            <p className="mt-2 text-gray-700"><strong>Explanation:</strong> {mockResult.explanation}</p>
            <p className="mt-2">
              <strong>Fit Decision:</strong>{' '}
              {mockResult.jobFit === 'yes' ? (
                <span className="text-green-600 font-semibold">You're a strong match for this job! 🎯</span>
              ) : (
                <span className="text-red-500 font-semibold">Needs improvement to match the job better.</span>
              )}
            </p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}

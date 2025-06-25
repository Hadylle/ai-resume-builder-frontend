import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import robotAnimation from '../assets/robot2.json';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function CvFeedbackPage() {
  const [cvFile, setCvFile] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);

  const mockStructuredFeedback = {
    strengths: [
      "Clearly structured work experience with relevant job titles.",
      "Technical skills are listed and appear consistent with industry needs.",
      "Includes certifications and projects which enhance credibility.",
    ],
    improvements: [
      "Add more quantifiable achievements in work experience.",
      "About Me section could better align with targeted roles.",
      "Use consistent formatting for dates and titles.",
    ],
    missing: [
      "No mention of soft skills like communication or teamwork.",
      "Summary/objective is too generic.",
      "Projects lack context and impact description.",
    ],
    impression:
      "This is a solid start for a resume. With a few strategic changes and enhancements, it can effectively stand out. Score: 7.5/10",
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleReview = () => {
    setLoading(true);
    setTimeout(() => {
      setFeedback(mockStructuredFeedback);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh+200px)] flex flex-col bg-gray-50">
   

      <main className="flex-1 max-w-6xl mx-auto py-12 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Lottie + Header */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
            <Lottie animationData={robotAnimation} loop className="max-w-md w-3/4 mx-auto" />
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1b4977] to-[#8444fb] bg-clip-text text-transparent"
            >
              Upload your CV for Expert Feedback
            </motion.h2>
          </div>

          {/* Upload */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200">
            <div>
              <label className="block font-medium mb-2 text-gray-700">Upload your CV (PDF)</label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#2defcf] file:text-white hover:file:bg-[#26c3ad]"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleReview}
                className="bg-[#8444fb] hover:bg-[#6d36d4] text-white px-6 py-2 rounded-md shadow-sm"
              >
                Generate Feedback
              </button>
            </div>
          </div>
        </div>

        {/* Feedback */}
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200 space-y-6"
          >
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-[#1b4977] mb-2">Strengths</h3>
              <ul className="list-disc ml-6 text-gray-800 space-y-1">
                {feedback.strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-xl font-semibold text-[#1b4977] mb-2">Areas for Improvement</h3>
              <ul className="list-disc ml-6 text-gray-800 space-y-1">
                {feedback.improvements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-xl font-semibold text-[#1b4977] mb-2">Missing or Weak Sections</h3>
              <ul className="list-disc ml-6 text-gray-800 space-y-1">
                {feedback.missing.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <h3 className="text-xl font-semibold text-[#1b4977] mb-2">Overall Impression</h3>
              <p className="text-gray-800">{feedback.impression}</p>
            </motion.div>

            {/* NEW: Improve CV Button */}
            <div className="pt-6 text-right">
              <button
                onClick={() => window.location.href = '/cv-improve'}
                className="bg-[#ce0227] hover:bg-[#a8011e] text-white px-6 py-2 rounded-md shadow-md transition duration-200"
              >
                🚀 Improve This CV
              </button>
            </div>
          </motion.div>
        )}

        {loading && (
          <div className="text-center mt-6 text-gray-500 animate-pulse">Analyzing your CV...</div>
        )}
      </main>

      <Footer />
    </div>
  );
}

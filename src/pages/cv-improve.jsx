import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import robotAnimation from '../assets/robot3.json';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import cvMock from '../assets/cv.pdf';

export default function CvImprovePage() {
  const [cvFile, setCvFile] = useState(null);
  const [showCv, setShowCv] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleImprove = () => {
    setLoading(true);
    setTimeout(() => {
      setShowCv(true);
      setLoading(false);
    }, 2000); // Simulate backend call
  };

  return (
    <div className="min-h-[calc(100vh+200px)] flex flex-col bg-gray-50">
    

      <main className="flex-1 max-w-6xl mx-auto py-12 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Animation & Header */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
            <Lottie animationData={robotAnimation} loop className="max-w-md w-3/4 mx-auto" />
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#760617] to-[#49a5e1] bg-clip-text text-transparent"
            >
              Upload Your CV to Get an Improved Version
            </motion.h2>
          </div>

          {/* Upload Form */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200">
            <div>
              <label className="block font-medium mb-2 text-gray-700">Upload your CV (PDF)</label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#49a5e1] file:text-white hover:file:bg-[#328bc6]"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleImprove}
                className="bg-[#760617] hover:bg-[#5a0412] text-white px-6 py-2 rounded-md shadow-sm"
              >
                ✨ Improve CV
              </button>
            </div>
          </div>
        </div>

        {/* Improved CV Mock Display */}
        {showCv && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-[#760617] mb-4">Your Improved CV</h3>
            <div className="w-full h-[700px] border rounded overflow-hidden">
              <iframe src={cvMock} title="Improved CV" className="w-full h-full"></iframe>
            </div>
            <div className="mt-6 text-right">
              <a
                href={cvMock}
                download="Improved_CV.pdf"
                className="bg-[#49a5e1] hover:bg-[#328bc6] text-white px-5 py-2 rounded-md shadow-md"
              >
                💾 Save as PDF
              </a>
            </div>
          </motion.div>
        )}

        {loading && (
          <div className="text-center mt-6 text-gray-500 animate-pulse">Improving your CV...</div>
        )}
      </main>

      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import robotAnimation from '../assets/robot2.json';
import tailoredPdf from '../assets/cv.pdf';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function CvTailoringPage() {
  const [showResult, setShowResult] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [jobText, setJobText] = useState('');

  const fullText = "Upload your CV and job offer to generate a tailored version for better matching.";
  const animatedWords = fullText.split(" ");

  const handleTailorCv = () => setShowResult(true);
  const handleFileChange = (e) => setCvFile(e.target.files[0]);

  return (
    <div className="min-h-[calc(100vh+200px)] flex flex-col bg-[#f9fbfc]">
   

      <main className="flex-1 max-w-6xl mx-auto py-12 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Lottie + animated text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
            <Lottie animationData={robotAnimation} loop className="max-w-md w-3/4 mx-auto" />

            <div className="mt-6 text-lg sm:text-xl font-semibold text-center flex flex-wrap justify-center gap-1 bg-clip-text text-transparent bg-gradient-to-r from-[#1b4977] to-[#2defcf]">
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
                className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#1b4977] file:text-white hover:file:bg-[#14355b]"
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-gray-700">Paste Job Description</label>
              <textarea
                rows={5}
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
                placeholder="Enter job offer text here..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#2defcf]"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleTailorCv}
                className="bg-[#8444fb] hover:bg-[#6d2ee1] text-white px-6 py-2 rounded-md shadow-sm"
              >
                🎯 Tailor My CV
              </button>
            </div>
          </div>
        </div>

        {/* Tailored CV result */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-white rounded-lg shadow-lg p-8 border border-gray-200 text-center"
          >
            <h2 className="text-2xl font-bold text-[#1b4977] mb-4">📄 Tailored CV Generated</h2>
            <iframe
              src={tailoredPdf}
              title="Tailored CV Preview"
              className="w-full h-[600px] border rounded-md shadow-sm"
            ></iframe>

            <a
              href={tailoredPdf}
              download="Tailored_CV.pdf"
              className="inline-block mt-6 bg-[#2defcf] hover:bg-[#1dd2b3] text-[#1b4977] font-medium px-6 py-2 rounded shadow"
            >
              💾 Download as PDF
            </a>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import robotAnimation from "../assets/robot.json";
import cvMock from "../assets/cv.pdf";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import LottieHeader from "../components/features/LottieHeader";
import CVUploadForm from "../components/features/CVUploadForm";
import CvDisplay from "../components/features/CvDisplay";

export default function CvImprovePage() {
  const [cvFile, setCvFile] = useState(null);
  const [showCv, setShowCv] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setCvFile(e.target.files[0]);

  const handleImprove = () => {
    setLoading(true);
    setTimeout(() => {
      setShowCv(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
 

      <main className="flex-1 max-w-6xl mx-auto py-12 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <LottieHeader
            animationData={robotAnimation}
            text="Uppload your CV and let me help you get an improved corrected version"
          />

          <CVUploadForm
            onFileChange={handleFileChange}
            onSubmit={handleImprove}
            buttonLabel="✨ Improve CV"
          />
        </div>

        {showCv && (
          <CvDisplay
            title="Your Improved CV"
            pdfSrc={cvMock}
            downloadName="Improved_CV.pdf"
          />
        )}

        {loading && (
          <div className="text-center mt-6 text-gray-600 animate-pulse">
            Improving your CV...
          </div>
        )}
      </main>

    </div>
  );
}

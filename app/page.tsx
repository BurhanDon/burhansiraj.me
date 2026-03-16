"use client";

import Header from "@/components/sections/Header";
import Objective from "@/components/sections/Objective";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import EarlierWork from "@/components/sections/EarlierWork";

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main>
      {/* Print Button */}
      <div className="mb-8 flex justify-end hide-on-print">
        <button
          onClick={handlePrint}
          className="px-4 py-2 text-sm bg-accent text-white rounded hover:bg-accent/90 transition-colors"
        >
          📥 Download as PDF
        </button>
      </div>

      {/* Portfolio Content */}
      <Header />
      <Objective />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <EarlierWork />
    </main>
  );
}

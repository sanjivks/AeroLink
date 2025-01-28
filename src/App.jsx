import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl max-auto pt-20 px-6">
        <HeroSection />
      </div>
    </div>
  );
};

export default App;

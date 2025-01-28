import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Feature from "./component/Feature";


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-20 max-auto pt-20 px-6">
        <HeroSection />
        <Feature/>
      </div>
    </div>
  );
};

export default App;

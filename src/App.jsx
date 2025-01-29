import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Feature from "./component/Feature";
import Workflows from "./component/Workflows";
import Pricing from "./component/Pricing";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-20 max-auto pt-20 px-6">
        <HeroSection />
        <Feature/>
        <Workflows/>
        <Pricing/>
      </div>
    </div>
  );
};

export default App;

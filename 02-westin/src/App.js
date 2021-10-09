import React from "react";
import Preloader from "./component/Preloader";
import Header from "./component/Header";
import Banner from "./component/Banner";
import About from "./component/About";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Testimonal from "./component/Testimonal";
import Blog from "./component/Blog";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Testimonal />
      <Blog />
      <Contact />
    </div>
  );
};

export default App;

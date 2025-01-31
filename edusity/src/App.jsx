import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from "./Components/Programs/Programs.jsx";
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Testimonial from './Components/Testimonial/Testimonial.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx';
const App = () => {
  const [playState, setPlayState] = React.useState(false);



  return (
    <div>
      <Navbar />
      <Hero/>
        <div className="container">
          <Title subTitle="Our Program " title="What We Offer"/>
            <Programs/>
            <About setPlayState={setPlayState}/>
            <Title subTitle="Gallery" title="Campus Photos"/>
            <Campus/>
            <Title subTitle="Testimonial" title="What Student says"/>
            <Testimonial/>
            <Title subTitle="Contact Us" title="Get in Touch"/>
            <Contact/>
            <Footer/>
        </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App

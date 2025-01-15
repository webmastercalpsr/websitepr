import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Fall2024 from './pages/Fall2024/Fall2024';
import AcceptedMajors from './pages/AcceptedMajors/AcceptedMajors';
import Involvement from './pages/Involvement/Involvement';
import FAQs from './pages/FAQs/FAQs';
import MeettheSisters from './pages/MeetTheSisters/MeetTheSisters';
import ExecutiveBoard from './pages/ExecutiveBoard/ExecutiveBoard';
import LighttheNight from './pages/LightTheNight/LightTheNight';
import BerkeleyProject from './pages/BerkeleyProject/BerkeleyProject';
import BerkeleyYouthAlternative from './pages/BerkeleyYouthAlternative/BerkeleyYouthAlternative';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/fall2024" element={<Fall2024 />} />
        <Route path="/accepted-majors" element={<AcceptedMajors />} />
        <Route path="/involvement" element={<Involvement />} />
        <Route path="/faqs" element={<FAQs />}/>
        <Route path="/meet-the-sisters" element={<MeettheSisters />}/>
        <Route path="/executive-board" element={<ExecutiveBoard />}/>
        <Route path="/light-the-night" element={<LighttheNight />}/>
        <Route path="/berkeley-project" element={<BerkeleyProject />}/>
        <Route path="/berkeley-youth-alternatives" element={<BerkeleyYouthAlternative />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>

        

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

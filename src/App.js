import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import HostingAndServers from './pages/HostingAndServers';
import SocialMediaMarkeeting from './pages/SocialMediaMarkeeting';
import WebsiteDevlopment from './pages/WebsiteDevlopment';
import MobileApplicationPage from './pages/MobileApplicationPage';
import WebApplication from './pages/WebApplication';
import CompanyRegistration from './pages/CompanyRegistration';
import RoboCalls from './pages/RoboCalls';
import WhatsappApi from './pages/WhatsappApi';
import Hardware from './pages/Hardware';

function App() {

  return (
    <>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/support' element={<Support />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/services' element={<Services />} />
        <Route path='/hosting_and_servers' element={<HostingAndServers />} />
        <Route path='/hardware_and_services' element={<Hardware />} />
        <Route path='/smm' element={<SocialMediaMarkeeting />} />
        <Route path='/website_devlopment' element={<WebsiteDevlopment />} />
        <Route path='/mobile_application_page' element={<MobileApplicationPage />} />
        <Route path='/web_application' element={<WebApplication />} />
        <Route path='/company_registration' element={<CompanyRegistration />} />
        <Route path='/robo_calls' element={<RoboCalls />} />
        <Route path='/api' element={<WhatsappApi />} />
      </Routes>
    </>
  );
}

export default App;

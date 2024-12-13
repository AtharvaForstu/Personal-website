import Navbar from './components/navigation/Navbar';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectHighlights from './components/ProjectHighlights';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <AboutSection />
      <ExpertiseSection />
      <ProjectHighlights />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
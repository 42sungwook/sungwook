import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Project42STAT from './pages/Project42STAT';
import ProjectOasis from './pages/ProjectOasis';
import Project42GG from './pages/Project42GG';

function HomePage() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/oasis" element={<ProjectOasis />} />
        <Route path="/projects/42stat" element={<Project42STAT />} />
        <Route path="/projects/42gg" element={<Project42GG />} />
      </Routes>
    </>
  );
}

export default App;

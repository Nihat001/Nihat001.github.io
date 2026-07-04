import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;

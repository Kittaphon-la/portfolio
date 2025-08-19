// src/App.jsx
import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './styles/global.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";


function App() {
  return (
    <>
      <Header />
      <ThemeToggle />
      <About />
      <Projects />
      {/* Contact section จะตามมาใน phase ต่อไป */}
    </>
  );
}
function App() {
  useEffect(() => {
    // Smooth scrolling offset for fixed header
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-padding-top: 80px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
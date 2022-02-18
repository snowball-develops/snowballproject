import { useState, useRef, useEffect } from 'react';
import './App.css';
import { FiMenu } from 'react-icons/fi'
import {FaArrowUp} from 'react-icons/fa'
/* Design Components */
import Top from './components/design/Top'
import Home from './components/routes/Home';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [onTopOffTop, setonTopOffTop] = useState(false);
  const onOff = () => {
    setonTopOffTop(!onTopOffTop)
  }

  const sections = useRef();
  const onHomeClick = () => {
    sections.current.scrollIntoView({ behavior: 'smooth' });
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <>
      <span className='callMenu' onClick={onOff}><FiMenu /></span>
      <div ref={sections}></div>
      {onTopOffTop ? <Top classed={"TopBar"} /> : <Top classed={"TopBar2"} />}
      <div className="App">
        <Home />
        <span className={scrollPosition < 550 ? "toTop" : "toTop2"} onClick={onHomeClick}><FaArrowUp/></span>
      </div>
    </>
  );
}

export default App;

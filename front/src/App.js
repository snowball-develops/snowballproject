import { useState,useRef } from 'react';
import './App.css';
import { FiMenu } from 'react-icons/fi'
/* Design Components */
import Top from './components/design/Top'
import Home from './components/routes/Home';

function App() {
  const [onTopOffTop, setonTopOffTop] = useState(false);
  const onOff = () => {
    setonTopOffTop(!onTopOffTop)
  }

  const sections = useRef();
  const onHomeClick = () => {
    sections.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <span className='callMenu' onClick={onOff}><FiMenu /></span>
      <div ref={sections}></div>
      {onTopOffTop ? <Top classed={"TopBar"} /> : <Top classed={"TopBar2"} />}
      <div className="App">
        <Home />
      <button onClick={onHomeClick}>dasdasd</button>
      </div>
    </>
  );
}

export default App;

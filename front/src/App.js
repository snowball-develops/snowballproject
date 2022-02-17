import { useState } from 'react';
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
  return (
    <>
      <span className='callMenu' onClick={onOff}><FiMenu /></span>
      {onTopOffTop ? <Top classed={"TopBar"} /> : <Top classed={"TopBar2"} />}
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;

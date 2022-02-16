import './App.css';
/* Design Components */
import Top from './components/design/Top'
import Home from './components/routes/Home';

function App() {
  return (
    <>
    <Top/>
    <div className="App">
      <Home/>
    </div>
    </>
  );
}

export default App;

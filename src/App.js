
import './styles/App.css';
import './styles/Loader.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>







     {/* footer */}
     <footer>
       <p><b>STUDENT:</b> Mwenge Corlinus. |  <b>ID:</b> 2404433989</p>
     </footer>
    </div>
  );
}

export default App;

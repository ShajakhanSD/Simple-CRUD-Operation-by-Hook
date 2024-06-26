// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

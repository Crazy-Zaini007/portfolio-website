import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './HomePage'
import Navbar from './Navbar';
import Projects from './Projects';
function App() {
  return (
    <div className="App m-0 p-0">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

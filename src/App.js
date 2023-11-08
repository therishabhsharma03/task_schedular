
import './App.css';

import Nav from "./component/navbar"
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/index";
import CreateTask from './component/createtask';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
        <Nav />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
            <Route path ="/create-task" element={<div><CreateTask/></div>}/>
          </Routes>
        </div>
      </HashRouter>
      
    </div>
  );
}

export default App;

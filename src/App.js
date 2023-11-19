
import './App.css';

import Nav from "./component/navbar"
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/index";
import CreateTask from './component/createtask';
import Register from './component/registerUser';
import Login from './component/login';
import CompletedList from './component/CompletedList';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
            <Route path ="/completed" element={<div><CompletedList/></div>}/>
            <Route path ="/register" element={<div><Register/></div>}/>
            <Route path ="/login" element={<div><Login/></div>}/>
          </Routes>
        </div>
      </HashRouter>
      
    </div>
  );
}

export default App;

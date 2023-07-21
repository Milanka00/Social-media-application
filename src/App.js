import './App.css';
import React,{useState} from 'react';

import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'


import Post from './Components/post';
import PostingPage from './Components/postingC';
import NetPage from './Pages/futureproNet';
import LandingPage from './Pages/landingPage';

function App() {
  const [auth,setAuth]=useState(false);
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/futurePronet' element={<NetPage setAuth={setAuth}/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;

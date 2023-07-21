import './App.css';
import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'


import Post from './Components/post';
import PostingPage from './Components/postingC';
import NetPage from './Pages/futureproNet';
import LandingPage from './Pages/landingPage';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/futurePronet' element={<NetPage/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;

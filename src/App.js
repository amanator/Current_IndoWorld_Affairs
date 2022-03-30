
import './App.css';

import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.js';
import News from './components/News';

const App = ()=> {
  // 4b4819d753b14b40872bc478fb909f8f
  const apikey = process.env.REACT_APP_NEWS_API


    return (
      <div>
        <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<News apikey={apikey} key={"general"} pageSize={8} country={"in"} category={"general"} />}></Route>
          <Route path="/business" element={<News apikey={apikey} key={"business"} pageSize={8} country={"in"} category={"business"} />}></Route>
          <Route path="/entertainment" element={<News apikey={apikey} key={"entertainment"} pageSize={8} country={"in"} category={"entertainment"} />}></Route>
          {/* <Route path="/general" element={<News apikey={apikey} key={"general"} pageSize={8} country={"in"} category={"general"} />}></Route> */}
          <Route path="/health" element={<News apikey={apikey} key={"health"} pageSize={8} country={"in"} category={"health"} />}></Route>
          <Route path="/science" element={<News apikey={apikey} key={"science"} pageSize={8} country={"in"} category={"science"} />}></Route>
          <Route path="/sports" element={<News apikey={apikey} key={"sports"} pageSize={8} country={"in"} category={"sports"} />}></Route>
          <Route path="/technology" element={<News apikey={apikey} key={"technology"} pageSize={8} country={"in"} category={"technology"} />}></Route>

        </Routes>
        </Router>
      
      </div>
    )
  
}

export default App
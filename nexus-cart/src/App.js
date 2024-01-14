import React from "react";
import { Route, Routes } from 'react-router-dom';
import Sign from "./sign";
import Main from "./main";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main />}/>
        {/* <Route path='/login' element={<Sign />}/> */}
      </Routes>
    </div>
  );
}

export default App;
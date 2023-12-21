import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Ouralbum from './components/Ouralbum';
import Myalbum from './components/Myalbum';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Main/>} />
          </Route>
          <Route path='/Myalbum'>
            <Route element={<Myalbum/>}/>
          </Route>
          <Route path='/Ouralbum'>
            <Route element={<Ouralbum/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
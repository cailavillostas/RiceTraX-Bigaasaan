import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Invent from '../pages/inventory.jsx';


function App() {
  return (
    <>
        <Routes>
          {}
          <Route path="" element={<Navigate to="/invent" />} />
         
          <Route path="/invent" element={<Invent/>} />
         


        </Routes>
    </>
  );
}

export default App;
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  Timeline,
  PageTitle
 } from './components';


function App() {
  return (
    <BrowserRouter>

    <PageTitle/>
      
      <Routes>

        <Route path='/' element={<Timeline />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import './global.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Main from './FilterTask/Main';

 
 export default function Index() {
   return (
     <div>

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/filterTask' element={<Main />} />
        </Routes>
     </div>
   )
 }
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Index /> 
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

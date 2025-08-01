import { useState } from 'react'


import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes.tsx"
import './index.css'

function App() {
  return ( 
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;

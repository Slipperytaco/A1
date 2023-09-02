import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import './Styling/App.css';
import ResponsiveGrid from './Components/Grid';
import Header from './Components/Header';

function App() {
  return (
  <div>
    <Header/>
    <ResponsiveGrid/>
  </div>
  );
}

export default App;
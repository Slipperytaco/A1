import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
//import {makeStyles} from '@mui/styles';
import ResponsiveGrid from './Components/Grid';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <div>
        <ResponsiveGrid/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

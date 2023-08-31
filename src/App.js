import React from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ResponsiveGrid from './griddy';
import Header from "./Header";
import D3Chart from './graph';

function App() {
  return (
  <div>
    <Header/>
    <ResponsiveGrid/>
    <D3Chart/>    
  </div>

  );
}


export default App;


/*
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
*/

import React from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Nodes from './/node';
import { Typography } from '@mui/material';
import TableauTable from './DataTable';

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
  }));
  
  export default function ResponsiveGrid() {
    return (
        <div style={{ margin: '20px', overflow: 'visible' }}>
            <Grid container spacing={2}>

                <Grid item xs={6} md={6}>
                    <Paper elevation={3} style={{ padding: '30px', borderRadius: '10px', height: '50vh' }}>
                    <Typography variant="h6">Content For Wallet Information</Typography>
                    <Typography>
                        This area is for the Wallet Information.
                    </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={6} md={6}>
                    <Paper elevation={3} style={{ padding: '30px', borderRadius: '10px', height: '50vh'}}>
                    <Typography variant="h6">Transactions History</Typography>
                    <Typography>
                        This area here displays the transactions between your wallet and other wallets.
                        <Nodes/>
                    </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '30px', borderRadius: '10px', height: '50vh' }}>
                    <Typography variant="h6">Content for Graphs</Typography>
                    <Typography>
                        Swiggly Lines.
                        <TableauTable/>
                    </Typography>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
  }
  

 /*
       <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
            <Grid xs={2} sm={4} lg={6} key={index}>
            <Item>{index + 1}</Item>
            </Grid>
        ))}
        </Grid>
      </Box>
 */
/* xs, extra-small: 0 - 600px
- sm, small: 600 - 900px
- md, medium: 900 - 1200px
- lg, large: 1200 - 1536px
- xl, extra-large: 1536 + px */
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import TableauTable from './DataTable';
import WalletChart from './Wallet_Chart';

  
export default function ResponsiveGrid() {
    return (
        <div style={{ margin: '20px', overflow: 'visible' }}>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={6} md={6} >
                    <Paper elevation={3} 
                        style={{ padding: '30px', 
                            borderRadius: '10px', 
                            height: '50vh' }}>
                    <Typography variant="h6"><b>Wallet Address:</b></Typography>
                    <Typography>
                        bc1q6v32wx37has40meqc9ea4tasc27umsksukylh2 <br></br>
                        <b>Balance:</b> 3,827.73917861 BTC
                        <WalletChart/>
                    </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={6} >
                    <Paper elevation={3} 
                        style={{ padding: '30px', 
                            borderRadius: '10px', 
                            height: '50vh'}}>
                    <Typography variant="h6">Transactions History</Typography>
                    <Typography>
                        This area here displays the transactions between your wallet and other wallets.
                    </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} md={12} >
                    <Paper elevation={3}>
                        <Typography>
                            <TableauTable/>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
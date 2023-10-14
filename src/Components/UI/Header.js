import React from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material';
import CurrencyBitcoinSharpIcon from '@mui/icons-material/CurrencyBitcoinSharp';

import '../../Styling/header.css'

const Header = ({currentPage}) => {

    //Everything for Search Queries
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const genSearchParam = () => {
        if (searchParams.has('q')) {
            return (createSearchParams({ q: searchParams.get('q') }).toString());
        }
    }
    const submission = (event) => {
      const searchJson = new FormData(event.target);
      setSearchParams(createSearchParams(Object.fromEntries(searchJson.entries())).toString());
    }

    return (
    <AppBar class='header'>
        <Toolbar>
          <CurrencyBitcoinSharpIcon />
          <b>&nbsp;TacoCorp&nbsp;&nbsp;&nbsp;&nbsp;</b>
          <form class = "hd-search-form" onSubmit = {submission}>
            <TextField placeholder = 'Enter Address'
              fullWidth size = {"small"}
              defaultValue = {searchParams.get("q")}
              varriant = 'filled'
              type = 'search'
              InputProps={{ startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon/>
                  </InputAdornment>
              ) }}
              name = 'q'
            />
            <br></br>
          </form>
        </Toolbar>
    </AppBar>
    );
}

export default Header;
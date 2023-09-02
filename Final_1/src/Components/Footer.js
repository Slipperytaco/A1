import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Grid from '@mui/material/Grid';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from "styled-components";
import { Grid3x3 } from "@mui/icons-material";

const Link = styled.a`
    color: white;
    text-decoration: none;
    padding: 10px;
    /* Changing the color */
    &:hover {
        color: red;
    }
`;
const GridStyled = styled(Grid)(({ theme }) => ({
    width:'100%', 
    backgroundColor:'#1976d2', 
    color:'white',
    marginBottom: 'auto',
    boxShadow: '0 -8px 8px 0 rgba(0, 0, 0, 0.2)'
  }));

export default function Footer() {
return (
    <footer>
        <GridStyled item xs={12} sm={12} md={12}>
            <MenuList style={{width:'100%'}}>
                <MenuItem>
                    <ListItemIcon><GitHubIcon></GitHubIcon></ListItemIcon>
                    <ListItemText style={{verticalAlign:'middle'}}>Our Contact</ListItemText>
                    <ListItemText><Link href="#">Ari</Link></ListItemText>
                    <ListItemText><Link href="103797198@student.swin.edu.au">Viet</Link></ListItemText>
                    <ListItemText><Link hred="#">Vinh</Link></ListItemText>
                </MenuItem>
            </MenuList>
        </GridStyled>
    </footer>
);
}

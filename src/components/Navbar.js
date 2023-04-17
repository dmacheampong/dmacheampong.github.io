import React from "react";
import { HashLink as Link} from "react-router-hash-link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import logo from '../assets/logo.png';
import { makeStyles } from "@material-ui/core/styles";

const pages = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Projects',
        url: '/projects'
    },
    {
        title: 'Contact',
        url: '/contact',
    },
];

const useStyles = makeStyles((theme) => (
    {
        appBar: {
            borderBottom: `1px sollid ${theme.palette.divider}`,
        }
    }));

function Navbar() {  
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="sticky" className={classes.appBar} color='secondary'>
                <Toolbar>
                    <Menu>
                        {pages.map((page) => (
                           <MenuItem key={page.title}>
                                <Typography textAlign='center'>
                                    {page.title}
                                </Typography>
                           </MenuItem> 
                        ))}
                    </Menu> 
                    <img src={logo} alt="Logo" width={100}/>
                    <Box sx={{ flexGrow: 1, display : {xs: "none", md: "flex"}}}>
                        {pages.map((page) => (
                            <Button key={page.title} component={Link} to={page.url} sx={{ my: 2, display: "block"}}>
                                <Typography color='textPrimary'>
                                    {page.title}
                                </Typography>
                            </Button>
                        ))}
                    </Box> 
                    
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Navbar;
import React, { useState } from "react";
import { HashLink as Link} from "react-router-hash-link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import logo from '../assets/logo.png';
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

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
    const { window } = Window;
    const [mobileOpen, setMobileOpen] = useState(false);

    const classes = useStyles();
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
            <Box bgcolor='secondary.main'>
                <img src={logo} alt="Logo" width={100}/>
            </Box>
            <Divider />
            <List>
                {pages.map((page) => (
                    <ListItem key={page.title}>
                    <Button key={page.title} component={Link} to={page.url} sx={{ my: 2, display: "block", ':hover': {bgcolor: 'secondary.main', color: 'white'}}}>
                            <Typography color='textPrimary'>
                                {page.title}
                            </Typography>
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
            <Box sx={{display: 'flex'}}>
            <AppBar position="sticky" className={classes.appBar} color='secondary'>
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none'}}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} alt="Logo" width={100}/>
                    <Box sx={{ flexGrow: 1, display : {xs: "none", md: "flex"}}}>
                        {pages.map((page) => (
                            <Button key={page.title} component={Link} to={page.url} sx={{ my: 2, display: "block", ':hover': {bgcolor: 'primary.main', color: 'white'}}}>
                                <Typography color='textPrimary'>
                                    {page.title}
                                </Typography>
                            </Button>
                        ))}
                    </Box> 
                    
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                container={container}
                variant="temporary" 
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, //Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box',
                    width: drawerWidth, bgcolor: 'primary.main' },
                }} //Darkens rests of the pages when drawer is open.
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Navbar;
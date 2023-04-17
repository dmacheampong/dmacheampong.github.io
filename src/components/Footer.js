import React from "react";
import Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <React.Fragment>
            <Box position='sticky' width='100%'>
            <Typography variant="h6" color='textPrimary' align="center"> 
                    Developed by David Acheampong
                </Typography>
            </Box>   
        </React.Fragment>
    )
}

export default Footer;
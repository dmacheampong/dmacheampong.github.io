import React from "react";
import {Typography, Box, Card, CardActionArea, CardContent, CardMedia, Grid } from "@mui/material";
import linkedinIcon from '../assets/linkedin_icon.png';
import githubIcon from '../assets/github_icon.png'
import gmailIcon from '../assets/gmail_icon.png';

const contacts = [
    {
        label: 'LinkedIn',
        icon: linkedinIcon,
        link: 'https://www.linkedin.com/in/david-acheampong/',
        alt: 'LinkedIn Icon'
    },
    {
        label: 'GitHub',
        icon: githubIcon,
        link: 'https://github.com/dmacheampong/',
        alt: 'GitHub Icon'
    },
    {
        label: 'davidmacheampong@gmail.com',
        icon: gmailIcon,
        link: 'mailto:davidmacheampong@gmail.com?subject=Test&body=Hi.',
        alt: 'Gmail Icon'
    }
]
  
function Contact() {
    return (
        <React.Fragment>
            <Box sx={{borderBottom: 2, borderColor: 'text.primary', m: 1, p: 1}}>
                <Typography component='div' variant='h2' color="textPrimary">
                    Contact Links
                </Typography>
            </Box>
            <Typography component='div' variant='h4' color="textPrimary" align="center">
                Find or reach out to me through these links!
            </Typography>
            <div style={{padding: 30}}>
                <Grid
                    container spacing={0} 
                    direction='column' 
                    alignItems='center' 
                    justify='center'>
                    {contacts.map((contact) => {
                        return (
                     <div style={{padding: 30}}>
                        <Card sx={{display: 'flex', maxWidth: 700, border: 5, borderColor: '#000000', borderRadius: '16px'}}>
                            <CardActionArea sx={{display: 'flex'}} href={contact.link}>
                                <CardMedia
                                component="img"
                                sx={{width: 100}}
                                image={contact.icon}
                                alt={contact.alt} />
                            <Box sx={{display: 'flex', alignItems: 'center'}}> 
                                <CardContent>
                                    <Typography component='div' variant='h5' color='textSecondary'>
                                        {contact.label}
                                    </Typography>
                                </CardContent>
                            </Box>
                            </CardActionArea>
                        </Card>
                        </div>
                        )
                    })}
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Contact
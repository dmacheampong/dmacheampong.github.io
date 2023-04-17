import React from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import headshot from '../assets/headshot.jpg'

function About() {
  return (
    <React.Fragment>
        <Box sx={{borderBottom: 2, borderColor: 'text.primary', m: 1, p: 1}}>
            <Typography component='div' variant='h2' color="textPrimary">
                About Me
            </Typography>
        </Box>
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
        <Card sx={{display: 'flex', border: 5, borderRadius: '50%', maxWidth: 300}}>
            <CardMedia component='img' image={headshot} sx={{width: 300}}/>
        </Card>
        <Box sx={{borderTop: 2, borderBottom: 2, borderColor: 'text.primary', m: 1, p: 1, maxWidth: 750}}>
        <Typography component='div' variant='h4' color="textPrimary" align="center"> 
              Hello, there! My name is David Acheampong and I love to code and design fun, creative projects as well as solve interesting programming challenges.
              In my spare time, I like to draw, write stories, and create music.
        </Typography>
        </Box>
        </Grid>
    </React.Fragment>
  );
}

export default About;
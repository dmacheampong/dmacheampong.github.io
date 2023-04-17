import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const ProjectList = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>Projects not found :(</p>;

    return (
        <React.Fragment>
            {repos.map((repo) => {
                return (
                    <div style={{padding: 30}}>
                    <Card sx={{display: 'flex', maxWidth: 800, border: 5, borderColor: '#000000', borderRadius: '16px'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5" color='textSecondary'>
                                   <a href={repo.html_url}>{repo.name.replaceAll('-', ' ')}</a>
                                </Typography>
                                {repo.homepage ? <Typography>
                                    <a href={repo.homepage}>{repo.homepage}</a>
                                    </Typography>: ''}
                                <Typography component="div" variant="body1" color='textSecondary'>
                                    {repo.description}
                                </Typography>
                            </CardContent>                            
                        </Box>
                        <CardMedia 
                            component="img" 
                            sx={{width: 500}}
                            image={'https://raw.githubusercontent.com/dmacheampong/' + repo.name + '/master/preview.png'}
                            alt="Preview Image"
                            />
                    </Card>
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default ProjectList;
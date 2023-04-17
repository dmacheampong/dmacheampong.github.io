import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import ListLoading from '../components/ListLoading';
import ProjectList from '../components/ProjectList';

function Projects() {
    const LoadingList = ListLoading(ProjectList);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({loading: true});
        const apiUrl = `https://api.github.com/users/dmacheampong/repos`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                setAppState({ loading: false, repos: repos.sort((a,b) => (a.created_at < b.created_at) ? 1: (a.created_at > b.created_at) ? -1: 0)});
            });
    }, [setAppState])
    return (
        <div>
            <Box sx={{borderBottom: 2, borderColor: 'text.primary', m: 1, p: 1}}>
                <Typography component='div' variant='h2' color="textPrimary">
                    Projects
                </Typography>
            </Box>
            <div className='repo-container'>
                <LoadingList isLoading={appState.loading} repos={appState.repos} />
            </div>
        </div>
    )
}

export default Projects;
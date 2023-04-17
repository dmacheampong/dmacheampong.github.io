import logo from '../assets/logo.png';
import Typography from '@mui/material/Typography';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <Typography component='div' variant='h2' color="textPrimary">
            Welcome!
        </Typography>
        <img src={logo} className="App-logo" alt="logo"/>
        <Typography component='div' variant='h2' color="textPrimary">
            David Acheampong
        </Typography>
        <Typography component='div' variant='h4' color="textPrimary">
        Software Developer
        </Typography>
      </header>
    </div>
  );
}

export default Home;

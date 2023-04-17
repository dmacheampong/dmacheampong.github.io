import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
  typography: {
    h2: {
      "fontWeight": 600,
    }
  },
  palette: {
    primary: {
      main: '#282c34'
    },
    secondary: {
      main: '#0047ab'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#000000'
    },
    background: {
      paper: '#FFFFFF'
    }
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;

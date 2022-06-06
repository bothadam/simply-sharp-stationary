import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#659DBD',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#e7cab1',
      main: '#DAAD86',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="logo-container">
            <div className="logo-text">Simply Sharp Stationery</div>
          </div>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content-container">
            <Switch>
              <Route path="/about">
                <div>this is the about page</div>
              </Route>
              <Route path="/products">
                <div>this is the products page</div>
              </Route>
              <Route path="/contact">
                <div>this is the contact page</div>
              </Route>
              <Route path="/">
                <div>this is the home page</div>
              </Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

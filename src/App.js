import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Contact from "./pages/contact/Contact";
// import Products from "./pages/products/Products";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      light: '#e7cab1',
      main: '#DAAD86',
      contrastText: 'rgb(90, 90, 90)',
    },
    contrastThreshold: 3,
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
          <div style={{ display: "flex", justifyContent: "center", justifyItems: 'center', width: "100%" }}>
            <hr className="divider" />
          </div>
          {/* <div className="navbar">
            <Navbar />
          </div> */}
          <div className="content-container">
            <Switch>
              <Route path="/about">
                <div>this is the about page</div>
              </Route>
              {/* <Route path="/products">
                <Products />
              </Route> */}
              {/* <Route path="/contact">
                <Contact />
              </Route> */}
              <Route path="/">
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router >
  );
}

export default App;

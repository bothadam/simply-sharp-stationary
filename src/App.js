import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="first-page">
          <div className="logo-container">
            <div className="logo-text">Simply Sharp Stationery</div>
          </div>
          <div className="navbar">
            <Navbar />
          </div>
        </div>
      </div>
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
    </Router>

  );
}

export default App;

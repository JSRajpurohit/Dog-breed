import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Random from './Components/Random';
import Breadlist from './Components/Breadlist';
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Breadlist}/>
          <Route path="/Random" component={Random}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;



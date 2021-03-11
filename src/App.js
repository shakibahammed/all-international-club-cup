import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
         <Home />
        </Route>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/leagueDetail/:idLeague">
        <LeagueDetails></LeagueDetails>
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
      
     
  
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import Card from "./Component/Card";
import CardDetails from "./Component/CardDetails";
import Circle from "./Component/Circle";
import Header from "./Component/Header";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import LandingPage from "./Component/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/"><Card/></Route>
          <Route exact path="/task2"> <Circle/></Route> 
          <Route exact path="/user-details/:id"><CardDetails/></Route>
          <Route exact path="/sigup"><SignUp/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/home"><LandingPage/></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

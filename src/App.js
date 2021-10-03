import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Appbar from './components/Appbar/Appbar';
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
     <Router>
      <div>
        <Appbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
          <Home></Home>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Services">
            <Services></Services>
          </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
    </div>
  );
}

export default App;

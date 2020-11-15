import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.sass';

import Header from './components/Header';
import Home from './pages/Home';
// import Nope from './pages/Nope';
import Hunt from './pages/Hunt';
import PointsEmbed from './components/Points';
import Points from './pages/Points';
import Join from './pages/Join';
import Press from './pages/Press';
import PressInfo from './pages/press/Info';
import Fall2020Press from './pages/press/Fall2020Press';
import Discord from './pages/Discord';
import Cans from './pages/Cans';

// Lunch assignment pages
// import Lunch from './pages/Lunch';
// import LunchCurrent from './pages/lunch/Current';
// import LunchNew from './pages/lunch/New';

export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route exact path="/points/embed">
            <PointsEmbed />
          </Route>
          <Route path="*">
            <Header className="header" />

            <main className="bodyContent">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/cans">
                  <Cans />
                </Route>
                <Route exact path="/hunt">
                  <Hunt />
                </Route>
                <Route exact path="/points">
                  <Points />
                </Route>
                <Route exact path="/join">
                  <Join />
                </Route>
                <Route exact path="/press">
                  <Press />
                </Route>
                <Route exact path="/press/fall-2020">
                  <Fall2020Press />
                </Route>
                <Route exact path="/press/info">
                  <PressInfo />
                </Route>
                <Route exact path="/discord">
                  <Discord />
                </Route>
                {/* <Route exact path="/lunch">
                  <Nope />
                </Route>
                <Route exact path="/lunch/current">
                  <Nope />
                </Route>
                <Route exact path="/lunch/new">
                  <Nope />
                </Route> */}
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </main>

            <footer className="footer">
              <p>
                © {new Date().getFullYear()} Jay Sella and SAAS Inter-House
                Council
              </p>
              <p>All Rights Reserved</p>
            </footer>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function NoMatch() {
  return (
    <>
      <h2>Well, well, well...</h2>
      <p>
        You see, you're trying to find some hidden treasure. Much to your
        dismay, you're not getting anything at this location...
      </p>
      <p>
        <Link to="/" className="button primary hollow round has-icon">
          Go home <span>&rarr;</span>
        </Link>
      </p>
    </>
  );
}

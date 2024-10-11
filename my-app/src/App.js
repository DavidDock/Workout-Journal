import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import styles from "./App.module.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./pages/about/About.js";
import Journal from './pages/journal/Journal.js';
import Links from './pages/links/Links.js';
import NotFound from './pages/error/NotFound.js';
import Welcome from './components/Welcome.js';

function App() {
  const [message, setMessage] = useState(true);

  useEffect (() => {
    const timeoutID = setTimeout(() => {
      setMessage(false);
    }, 3000);
    return () => clearTimeout(timeoutID);
  },[]);

  return (
    <div className={styles.App}>
      {message ? (
        <Welcome />
      ) : (
          <>
            <Header></Header>
            <div className={`d-flex flex-column ${styles.Bod}`}>
              <NavBar></NavBar>
              <Container className={styles.ContentContainer}>
                <Switch>
                  <Route exact path="/" render={() => <About />} />
                  <Route
                    exact
                    path="/journal"
                    render={() => <Journal />} />
                  <Route
                    exact
                    path="/links"
                    render={() => <Links />} />
                  <Route render={() => <NotFound />} />
                </Switch>
              </Container>
            </div>
          </>
         )}
      
    </div>
  );
}

export default App;

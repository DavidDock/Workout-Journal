import Container from 'react-bootstrap/Container';
import styles from "./App.module.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./pages/about/About.js";

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <div className={`d-flex flex-column flex-sm-row ${styles.Bod}`}>
        <NavBar></NavBar>
        <Container>
          <Switch>
            <Route exact path="/" render={() => <About />} />
            <Route
              exact
              path="/journal"
              render={() => (
                <p>Journal</p>
              )}
            />
            <Route
              exact
              path="/links"
              render={() => (
                <p>Links</p>
              )}
            />
            <Route render={() => <About />} />
          </Switch>
        </Container>
      </div>
    </div>
  );
}

export default App;

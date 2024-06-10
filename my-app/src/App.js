import Container from 'react-bootstrap/Container';
import styles from "./App.module.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <div className={`d-flex flex-column flex-sm-row ${styles.Bod}`}>
        <NavBar></NavBar>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <p>About</p>
              )}
            />
            <Route
              exact
              path="/journal"
              render={() => (
                <p>Journal</p>
              )}
            />
            <Route
              exact
              path="/references"
              render={() => (
                <p>References</p>
              )}
            />
            <Route render={() => <p>Not found</p>} />
          </Switch>
        </Container>
      </div>
    </div>
  );
}

export default App;

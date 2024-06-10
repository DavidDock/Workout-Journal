import Container from 'react-bootstrap/Container';
import styles from "./App.module.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <div className={`d-flex flex-column flex-sm-row ${styles.Bod}`}>
        <NavBar></NavBar>
        <Container>
          <p>Hello</p>
        </Container>
      </div>
    </div>
  );
}

export default App;

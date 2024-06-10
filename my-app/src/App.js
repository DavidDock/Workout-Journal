import styles from "./App.module.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <div className={`d-flex flex-column flex-sm-row ${styles.Bod}`}>
        <NavBar></NavBar>
        <p class="text-white">Main content</p>
      </div>
    </div>
  );
}

export default App;

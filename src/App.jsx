import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import styles from "./App.module.css"

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.Home}>
        <Home />
      </div>

      {/* <Footer /> */}
    </>
  )
}

export default App
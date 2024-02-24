import "./App.scss"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"
import Router from "./router/Router"

function App() {
  return (
    <>
      <div>
        <Header />
        <Router />
        <Footer />

      </div>
    </>
  )
}

export default App

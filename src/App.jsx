import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Container from "./components/layout/Container"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              {
                /* <Projects /> */
              }
            }
          />
          <Route
            path="/company"
            element={
              {
                /* <Company /> */
              }
            }
          />
          <Route
            path="/contact"
            element={
              {
                /* <Contact /> */
              }
            }
          />
          <Route
            path="/new-project"
            element={
              {
                /* <NewProject /> */
              }
            }
          />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App

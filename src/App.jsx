import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Routes>
        <Route
          path="/"
          element={
            {
              /* <Home /> */
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
      {/* Footer */}
    </Router>
  )
}

export default App

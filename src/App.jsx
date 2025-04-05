import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Header, Footer } from "./components/ui"
import { Home } from "./pages"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

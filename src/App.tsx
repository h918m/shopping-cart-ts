import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { NotFound } from "./pages/NotFound"

function App() {

  return (
    <Container className="mb-4">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/about" element={<About/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
    </Container>
  )
}

export default App

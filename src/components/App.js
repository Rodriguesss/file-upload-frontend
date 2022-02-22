import { BrowserRouter, Routes as Router, Route } from "react-router-dom"

import { GlobalStyle } from "../css/reset"
import { Style } from "../css/style"

import Home from "../pages/Home"

import Container from "./Container"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Style />
      <Container>
        <BrowserRouter>
            <Router>
              <Route path="/" element={<Home />} />
            </Router>
        </BrowserRouter>
      </Container>
    </>
  )
}
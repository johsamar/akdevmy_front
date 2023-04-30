import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './containers/NavBar'
import Academia from './pages/Academia'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Estudiantes from './pages/Estudiantes'
import MisCursos from './pages/MisCursos'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


    <div className="container text-center">
      <div className="row align-items-start">
      <Router>
        <div className="col-6">
           <NavBar/>
        </div>

        <div className="col-6">
            <Routes>
              <Route path="/" element={
                <Academia/>
              }/> 
            </Routes>

            <Routes>
              <Route path="/estudiantes" element={
                <Estudiantes/>
              }/> 
            </Routes>

            <Routes>
              <Route path="/misCursos" element={
                <MisCursos/>
              }/> 
            </Routes>
        </div>
      </Router>
      </div>
    </div>
    </>
  )
}

export default App

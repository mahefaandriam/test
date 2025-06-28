import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Test from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <Router>
      <Routes>
      <Route path="/test" element={<Test />} />
      <Route
        path="/"
        element={
        <>
          <a href="/test">test</a>
          <div>
          <a href="https://vite.dev" target="_blank">
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
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          </div>
          <p className="read-the-docs">
          Click on the Vite and React logos to learn more
          </p>
        </>
        }
      />
      </Routes>

    </Router>
    </>
  )
}

export default App

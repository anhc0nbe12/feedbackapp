import './bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import About from './pages/About'
import AboutLink from './components/AboutLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutLink />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          ></Route>
        </Routes>
        {/* <div>
        <NavLink to='/about' activeClassName='active' >about</NavLink>
        <NavLink to='/' activeClassName='active' >home</NavLink>
      </div> */}
        <Footer />
      </Router>
    </FeedbackProvider>
  )
}

export default App

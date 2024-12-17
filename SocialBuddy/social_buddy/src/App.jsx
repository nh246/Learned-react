import ContextProvider  from './Context/ContextProvider'
import './App.css'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Comment from './Components/Comment/Comment';
function App() {

  return (
   <ContextProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
      </Router>
   </ContextProvider>
  )
}

export default App

import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Questions from './pages/Questions'
import Result from './pages/Result'
import Nav from './components/Nav'
import { app } from './firebase-config'

function App() {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [noOfQuestion, setNoOfQuestion] = useState("");
  const [score, setScore] = useState("")



  return (
   <Router>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/settings' element={<Settings setCategory={setCategory} setDifficulty={setDifficulty} setType={setType} setNoOfQuestion={setNoOfQuestion} />} />
    <Route path="/questions" element={<Questions category={category} difficulty={difficulty} type={type} noOfQuestion={noOfQuestion} />} />
    <Route path='/result' element={<Result score={score}/>}> </Route>
    </Routes>
   </Router>
  )
}

export default App

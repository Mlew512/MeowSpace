import './App.css'
import Snackbar from './component/Snackbar'
import Feed from './component/Feed'
import Sidebar from './component/Sidbar'
import React from 'react'
import axios from 'axios'
// import Reels from './component/Reels'

function App() {
  

  return (
    <>
    {/* <Reels/> */}
    {/* unreleased feature^ */}
    <Snackbar/>
    <Feed/>
    <Sidebar/>
    </>
  )
}

export default App

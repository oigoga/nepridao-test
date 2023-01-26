import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Mainpage from './components/Mainpage'

function App() {

  return (
    
<>
<div className="flex flex-row justify-between w-screen  bg-bg-color">
      <Sidebar />
      <Mainpage />
    </div>
</>
    
  )
}

export default App

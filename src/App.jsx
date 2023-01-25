import { useState } from 'react'
import Mainpage from './components/Mainpage'
import Sidebar from './components/Sidebar'

function App() {

  return (
    < >
    <div className='flex flex-row bg-bg-color'>
    <Sidebar/>
      <Mainpage/>
    </div>
      
    </>
  )
}

export default App

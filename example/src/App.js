import React from 'react'

import { Button } from 'bulletproof1'
import 'bulletproof1/dist/index.css'

const App = () => {
  return (
    <>
      <Button text='Click' onClick={() => alert('OK')} />
    </>
  )
}

export default App

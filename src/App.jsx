import { useState } from 'react'
import Linechart from './components/Linechart'
import Barchart from './components/Barchart';
import Areachart from './components/Areachart';


function App() {


  return (
    <>
      <Linechart/>
      <Barchart/>
      <Areachart/>
    </>
  )
}

export default App

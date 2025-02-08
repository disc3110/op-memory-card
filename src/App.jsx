import { useState } from 'react'

function App() {

  return (
    <div className="h-screen w-screen bg-gray-600"> 
      <div className='p-4'>
        <h1 className='text-white text-center font-extrabold text-3çxl'>Memory game</h1>
        <div className='text-white'>
          In this memory game, your objective is to select images that you haven’t previously chosen. 
          Each time you select an image, all images will shuffle to new positions. The goal is to remember 
          which images you’ve already selected and avoid selecting them again. The game continues until all images 
          have been selected once. Challenge your memory and see how accurately you can recall your previous choices!
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 h-[80vh]">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="border-2 border-black outline-4 bg-pink-500 m-4">
            "Content for div {i + 1} */"
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'

function App() {

  let cards = {1:'image 1', 2:'image 2', 3:'image 3',4:'image 4', 5:'image 5', 6:'image 6',7:'image 7', 8:'image 8', 9:'image 9',10:'image 10', 11:'image 11', 12:'image 12',}

  let clickedCard = new Set();

  let handleCardClick = (key) => {
    if (clickedCard.has(key) ){
      console.log(`you lost`)
    } else {
      clickedCard.add(key)
      console.log(`you clicked card # ${key}`)
    }
  }

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
       {Object.entries(cards).map(([key, card]) => (
         <div 
          key={key} 
          className="border-2 border-black outline-4 bg-pink-500 m-4 hover:bg-sky-700" 
          onClick={()=> handleCardClick(key)}
         >
            {`Content for div ${card}`}
         </div>
       ))}
      </div>
    </div>
  )
}

export default App

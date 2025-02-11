import { useState, useEffect } from 'react';

function App() {
    let cards = {1:'image 1', 2:'image 2', 3:'image 3', 4:'image 4', 5:'image 5', 6:'image 6',
                 7:'image 7', 8:'image 8', 9:'image 9', 10:'image 10', 11:'image 11', 12:'image 12'};

    const [clickedCards, setClickedCards] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [shuffledCards, setShuffledCards] = useState(Object.entries(cards));
    const [gameOver, setGameOver] = useState(false);  // Track when the user loses

    useEffect(() => {
        const newImageURLs = Object.keys(cards).map(() => 
            `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100000)}`
        );
        setImageURLs(newImageURLs);
    }, []);

    let handleCardClick = (key) => {
        if (clickedCards.includes(key)) {
            setGameOver(true);  // Show "Game Over" modal
        } else {
            setClickedCards(prevSet => [...prevSet, key]);

            // Shuffle cards after each click
            setShuffledCards(prevCards => [...prevCards].sort(() => Math.random() - 0.5));
        }
    };

    // Function to restart the game
    let restartGame = () => {
        setClickedCards([]);
        setGameOver(false);
        setShuffledCards(Object.entries(cards).sort(() => Math.random() - 0.5));
    };

    return (
        <div className="h-screen w-screen bg-gray-600"> 
            <div className='p-4'>
                <h1 className='text-white text-center font-extrabold text-3xl'>Memory Game</h1>
                <div className='text-white'>
                    In this memory game, your objective is to select images that you haven’t previously chosen. 
                    Each time you select an image, all images will shuffle to new positions. The goal is to remember 
                    which images you’ve already selected and avoid selecting them again. The game continues until all images 
                    have been selected once. Challenge your memory and see how accurately you can recall your previous choices!
                </div>
                <div className='text-white text-center font-medium'>
                    {`SCORE: ${clickedCards.length}/12`}
                </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 h-[80vh]">
                {shuffledCards.map(([key, card], index) => (
                    <div 
                        key={key} 
                        className="border-2 border-black outline-4 bg-pink-500 m-4 hover:bg-sky-700" 
                        onClick={() => handleCardClick(key)}
                        style={{
                            backgroundImage: `url(${imageURLs[key-1]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                    </div>
                ))}
            </div>

            {gameOver && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold text-red-600">Game Over!</h2>
                        <p className="text-gray-800 mt-2">You clicked the same card twice!</p>
                        <button 
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={restartGame}
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
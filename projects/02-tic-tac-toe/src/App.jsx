import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants'
import { checkWinner } from './logic/board'
function App() {
  
  const [board, setBoard] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState(TURNS.X)
  
  const [winner, setWinner] = useState(null)



  const checkEndGame = (newBoard) =>{

    //revisamos si hay empate
    //si no hay mas espacios vacios
    //en el tablero
    return newBoard.every((square) => square !== null)
  }
  const updateBoard = (index) => {
    //no actualizamos esta posicion si hay algo en ella
    if(board[index]|| winner) return
    // actualizar el tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false) //empate
    }

  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
             <Square key={index} index={index} updateBoard={updateBoard}>
              {_}
             </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section>
        {
          winner !== null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false 
                    ? 'Empate' 
                    : `Ganador: ${winner}`
                  }
                </h2>
                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Reiniciar</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  )
}

export default App

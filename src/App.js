import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square.js"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const  handleGamePlay = (index) => {
    let updatedBoard = [...board]
    updatedBoard[index] = "🌴"
    setBoard(updatedBoard)

    //alert(index)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((value, index) => {
          return(
            <Square
            Key={index}
            value={value}
            index={index}
            handleGamePlay=
            {handleGamePlay}
            /> 
          ) 
        })}
        
      </div>
    </>
  )
}

export default App

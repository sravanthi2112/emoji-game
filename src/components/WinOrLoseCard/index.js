// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {winOrLose, score, clickedOnPlayAgain} = props
  const onClickPlayAgain = () => {
    clickedOnPlayAgain()
  }
  console.log(score)
  console.log(winOrLose)
  const imgUrl =
    winOrLose === 'win'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const result = winOrLose === 'win' ? 'You Won' : 'You Lose'
  return (
    <div className="win-or-loose-container">
      <div>
        <h1 className="win-loose-title">{result}</h1>
        <p className="best-score">Best Score</p>
        <p className="score">{score}/12</p>
        <button className="play-again-btn" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="win-loose-image" />
    </div>
  )
}

export default WinOrLoseCard

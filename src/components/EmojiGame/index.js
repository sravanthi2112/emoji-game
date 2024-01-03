import {Component} from 'react'

import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    emojisList: this.props.emojisList,
    clickedArray: [],
    score: 0,
    topScore: 0,
    winOrLose: 'win',
    gameOver: false,
  }

  onClickEmoji = id => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    this.setState({
      emojisList: shuffledEmojisList(),
    })

    const {clickedArray} = this.state
    const includesinArray = clickedArray.includes(id)

    if (!includesinArray) {
      this.setState(prevState => ({
        clickedArray: [...prevState.clickedArray, id],
      }))
    } else if (includesinArray) {
      this.setState({winOrLose: 'loose'})
      this.setState({gameOver: true})
    }

    this.setState(prevState => ({
      score: includesinArray ? prevState.score : prevState.score + 1,
      topScore: includesinArray
        ? prevState.topScore
        : Math.max(prevState.score + 1, prevState.topScore),
    }))

    const {emojisList} = this.state
    if (clickedArray.length === emojisList.length) {
      this.setState({
        winOrLose: 'win',
      })
    }
  }

  clickedOnPlayAgain = () => {
    const {score, topScore} = this.state
    this.setState(prevState => ({
      gameOver: false,
      clickedArray: [],
      score: 0,
      topScore: Math.max(prevState.score, prevState.topScore),
      winOrLose: 'win',
    }))
  }

  render() {
    const {emojisList} = this.props
    const {clickedArray, score, winOrLose, gameOver} = this.state
    return (
      <div className="background-sec">
        <NavBar scores={score} />
        <div className="body-container">
          <ul className="emojis-container">
            {gameOver ? (
              <WinOrLoseCard
                winOrLose={winOrLose}
                score={score}
                clickedOnPlayAgain={this.clickedOnPlayAgain}
              />
            ) : (
              emojisList.map(eachEmoji => (
                <EmojiCard
                  emojisList={eachEmoji}
                  key={eachEmoji.id}
                  onClickEmoji={this.onClickEmoji}
                />
              ))
            )}
          </ul>
        </div>
        <div></div>
      </div>
    )
  }
}

export default EmojiGame

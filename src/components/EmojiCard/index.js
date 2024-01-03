// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojisList
  const clickedOnEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="each-emoji">
      <button className="emoji-btn">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emoji"
          onClick={clickedOnEmoji}
        />
      </button>
    </li>
  )
}

export default EmojiCard

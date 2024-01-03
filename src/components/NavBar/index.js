// Write your code here.
import './index.css'

const NavBar = props => {
  const {scores} = props

  return (
    <nav className="navbar-sec">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="emoji-title">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="scores">Score: {scores}</p>
        <p className="scores">Top Score: 0</p>
      </div>
    </nav>
  )
}

export default NavBar

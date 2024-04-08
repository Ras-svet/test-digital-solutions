import "./Card.css"
import React from "react"

function Card(props) {
  const [isPressed, setIsPressed] = React.useState(false)

  function handlePressed() {
    setIsPressed(!isPressed)
  }

  React.useEffect(() => {
    setIsPressed(false)
  }, [])

  return (
    <li className={`card ${isPressed ? 'card_pressed' : ''}`} onClick={handlePressed}>
      <h1 className="card__title">{props.card.title}</h1>
      <p className="card__text">{props.card.text}</p>
    </li>
  )
}

export default Card
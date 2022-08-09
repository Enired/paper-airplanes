import React from "react"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"

export const LetterListItem = (props) => {
  // console.log("++++++++++++++++++", props)
  const navigate = useNavigate();

  const { letter, setCurrentLetter } = props
  return (
    <div className="letterItem"
      //    onClick={() => setCurrentLetter(letter)}>
      onClick={() => navigate(`/letters/${letter.id}`)}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');
      </style>
      <h5>Hello friend</h5>
      <p className="letterMessage">{props.letterMessage}</p>
      <footer className="letterType">
        Type:{props.type}
        <Button>Flag</Button>
      </footer>
    </div>
  )
}
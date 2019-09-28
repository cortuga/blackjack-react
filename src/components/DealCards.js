import React from "react"

const DealCards = () => {
  const dealCards = () => {
    for (let i = 0; i < 2; i++) {
      userHandOne.push(deck[i])
      deck.pop(deck[i])
      userHandTwo.push(deck[i + 2])
      deck.pop(deck[i + 2])
      houseHand.push(deck[i + 4])
      deck.pop(deck[i + 4])
    }
    console.log(userHandOne)
    console.log(userHandTwo)
    console.log(houseHand)
  }

  // const hitMe = () => {

  return <div></div>
}

export default DealCards

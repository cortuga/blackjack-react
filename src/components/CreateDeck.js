import React from "react"

const CreateDeck = () => {
  const createDeck = () => {
    const deck = []
    const suits = ["hearts", "clubs", "spades", "diamonds"]
    const values = [
      { name: "ace", value: 11 },
      { name: "2", value: 2 },
      { name: "3", value: 3 },
      { name: "4", value: 4 },
      { name: "5", value: 5 },
      { name: "6", value: 6 },
      { name: "7", value: 7 },
      { name: "8", value: 8 },
      { name: "9", value: 9 },
      { name: "10", value: 10 },
      { name: "jack", value: 10 },
      { name: "queen", value: 10 },
      { name: "king", value: 10 }
    ]
    for (let i = 0; i < suits.length; i++) {
      let suit = suits[i]
      for (let j = 0; j < values.length; j++) {
        let value = values[j]
        deck.push({
          suit: suit,
          rank: value.name,
          number: value.value
        })
      }
      // console.log(deck);
    }
  }

  return <div></div>
}

export default CreateDeck

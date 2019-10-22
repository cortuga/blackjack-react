import React, { Component, useState, useEffect } from "react"
import ShuffleDeck from "./components/ShuffleDeck"

const App = () => {
  const [deck, setDeck] = useState([])
  const [userHandOne, setUserHandOne] = useState([])
  const [userHandTwo, setUserHandTwo] = useState([])
  const [houseHand, setHouseHand] = useState([])

  const [handOneTotal, setHandOneTotal] = useState(0)
  const [handTwoTotal, setHandTwoTotal] = useState(0)
  const [houseTotal, setHouseTotal] = useState(0)

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
    setDeck(deck)
  }

  const ShuffleDeck = () => {
    const shuffleDeck = () => {
      for (let i = 0; i < deck.length; i++) {
        //now gen a floored num
        //then swap deck[i] with deck[rando]
        let randomNum = Math.floor(Math.random() * i + 1)
        let temp = deck[i]
        deck[i] = deck[randomNum]
        deck[randomNum] = temp
        // console.log("deck[i] =>", deck[i]);
        // console.log(randomNum);
      }
      console.log(deck)
    }
  }

  useEffect(() => {
    createDeck()
    ShuffleDeck()
  }, [])

  // setup useEffect that calls create deck and other functions upon page load
  return (
    <div>
      <>
        <main>
          <section class='top-section'>
            <h1 class='blackjack'>Blackjack</h1>
            <img src='.\assets\background\black_card.jpeg' />

            <section class='deck-buttons-section'>
              <button
                class='shuffle-deck-button button'
                onClick={() => ShuffleDeck()}
              >
                Shuffle Deck
              </button>
              <button class='deal-cards-button button'>Deal Cards</button>
            </section>

            <section class='hit-stand-section'>
              <button class='hit-button button'>Hit</button>
              <button class='stand-button button'>Stand</button>
            </section>
          </section>

          {/* <!-- Player Area --> */}
          <section class='all-players-section'>
            <section class='player-1-section player'>
              Player 1
              <input
                type='text'
                class='player-1-input '
                placeholder='Enter Your Name'
              />
              <p class='player-1-cards'></p>
              <button class='player-1-show-cards-button button'>
                Show Cards
              </button>
            </section>

            <section class='player-house-section player'>
              House
              <p class='player-house-cards'></p>
              <button class='player-house-show-cards-button button'>
                Show Cards
              </button>
            </section>

            <section class='player-2-section player'>
              Player 2
              <input
                type='text'
                class='player-2-input '
                placeholder='Enter Your Name'
              />
              <p class='player-2-cards'></p>
              <button class='player-2-show-cards-button button'>
                Show Cards
              </button>
            </section>
          </section>
        </main>
        {/* <!-- Bottom of page --> */}
        <footer>
          <p class='footer-p'>
            copyright © Grandmaison: 31yr Before Singularity. All information is
            serial
          </p>
        </footer>
      </>
    </div>
  )
}

export default App

import React, { Component, useState, useEffect } from "react"
// import Toggle from "./components/Toggle"

const App = () => {
  const [deck, setDeck] = useState([])
  const [userHandOne, setUserHandOne] = useState([])
  const [userHandTwo, setUserHandTwo] = useState([])
  const [houseHand, setHouseHand] = useState([])

  const [handOneTotal, setHandOneTotal] = useState(0)
  const [handTwoTotal, setHandTwoTotal] = useState(0)
  const [houseTotal, setHouseTotal] = useState(0)

  const createDeck = () => {
    //Creates on
    // const deck = []
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
    }
    setDeck([...deck])
    console.log("Deck Created", deck)
    // On the deal or in the JSX evaluation the player will have both cards displayed but the house will have only one card displayed. House must keep playing until 18 value or higher is obtained.
  }

  const ShuffleDeck = () => {
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
    console.log("Deck Shuffled", deck)
    setDeck([...deck])
  }

  const DealCards = () => {
    for (let i = 0; i < 2; i++) {
      userHandOne.push(deck[i])
      deck.pop(deck[i])
      userHandTwo.push(deck[i + 2])
      deck.pop(deck[i + 2])
      houseHand.push(deck[i + 4])
      deck.pop(deck[i + 4])
    }
    setUserHandOne([...userHandOne])
    setUserHandTwo(userHandTwo)
    setHouseHand(houseHand)
    console.log("User Hand 1", userHandOne)
    console.log("User Hand 2", userHandTwo)
    console.log("House Hand", houseHand)
  }

  const HandleShowCards = e => {}

  useEffect(() => {
    createDeck()
    // ShuffleDeck()
  }, [])

  // setup useEffect that calls create deck and other functions upon page load
  return (
    <div>
      <>
        <main>
          <section className='top-section'>
            <h1 className='blackjack'>Blackjack</h1>
            <img alt='something' src='.\assets\background\black_card.jpeg' />

            <section className='deck-buttons-section'>
              <button
                className='shuffle-deck-button button'
                onClick={() => ShuffleDeck()}
                // Question: Why is an anon function being used here?
              >
                Shuffle Deck
              </button>

              <button
                className='deal-cards-button button'
                onClick={() => DealCards()}
              >
                Deal Cards
              </button>
            </section>

            <section className='hit-stand-section'>
              <button className='hit-button button'>Hit</button>
              <button className='stand-button button'>Stand</button>
            </section>
          </section>

          {/* <!-- Player Area --> */}
          <section className='all-players-section'>
            <section className='player-1-section player'>
              Player 1
              <input
                type='text'
                className='player-1-input '
                placeholder='Enter Your Name'
              />
              <p className='player-1-cards'></p>
              <button className='player-1-show-cards-button button'>
                Show Cards
              </button>
              <ul>
                {userHandOne.map((card, i) => {
                  return (
                    <li key={i}>
                      {" "}
                      {card.suit} of {card.rank}
                    </li>
                  )
                })}
              </ul>
              {/* ?????????^^^^^^^^ */}
            </section>

            <section className='player-house-section player'>
              House
              <p className='player-house-cards'></p>
              {/* <button className='player-house-show-cards-button button'>
                Show Cards
              </button> */}
            </section>

            {/* <section className='player-2-section player'>
              Player 2
              <input
                type='text'
                className='player-2-input '
                placeholder='Enter Your Name'
              />
              <p className='player-2-cards'></p>
              <button className='player-2-show-cards-button button'>
                Show Cards
              </button>
              
            </section> */}
          </section>
        </main>
        {/* <!-- Bottom of page --> */}
        {/* <ul>
          {deck.map(card => {
            return (
              <li>
                {card.suit} of {card.rank}
              </li>
            )
          })}
        </ul> */}
        <footer>
          <p className='footer-p'>
            copyright © Grandmaison: 31yr Before Singularity. All information is
            serial
          </p>
        </footer>
      </>
    </div>
  )
}

export default App

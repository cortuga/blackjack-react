import React, { useState, useEffect } from "react"
// import { PassThrough } from "stream"
// import Toggle from "./components/Toggle"

// import aceSpades from "../Images/ace_of_spades.svg"
// import twoSpades from "../Images/2_of_spades.svg"
// import threeSpades from "../Images/3_of_spades.svg"
// import fourSpades from "../Images/4_of_spades.svg"
// import fiveSpades from "../Images/5_of_clubs.svg"
// import sixSpades from "../Images/6_of_spades.svg"
// import sevenSpades from "../Images/7_of_spades.svg"
// import eightSpades from "../Images/8_of_spades.svg"
// import nineSpades from "../Images/9_of_spades.svg"
// import tenSpades from "../Images/10_of_spades.svg"
// import jackSpades from "../Images/jack_of_spades.svg"
// import queenSpades from "../Images/queen_of_spades.svg"
// import kingSpades from "../Images/king_of_spades.svg"
// import aceHearts from "../Images/ace_of_hearts.svg"
// import twoHearts from "../Images/2_of_hearts.svg"
// import threeHearts from "../Images/3_of_hearts.svg"
// import fourHearts from "../Images/4_of_hearts.svg"
// import fiveHearts from "../Images/5_of_hearts.svg"
// import sixHearts from "../Images/6_of_hearts.svg"
// import sevenHearts from "../Images/7_of_hearts.svg"
// import eightHearts from "../Images/8_of_hearts.svg"
// import nineHearts from "../Images/9_of_hearts.svg"
// import tenHearts from "../Images/10_of_hearts.svg"
// import jackHearts from "../Images/jack_of_hearts.svg"
// import queenHearts from "../Images/queen_of_hearts.svg"
// import kingHearts from "../Images/king_of_hearts.svg"
// import aceClubs from "../Images/ace_of_clubs.svg"
// import twoClubs from "../Images/2_of_clubs.svg"
// import threeClubs from "../Images/3_of_clubs.svg"
// import fourClubs from "../Images/4_of_clubs.svg"
// import fiveClubs from "../Images/5_of_clubs.svg"
// import sixClubs from "../Images/6_of_clubs.svg"
// import sevenClubs from "../Images/7_of_clubs.svg"
// import eightClubs from "../Images/8_of_clubs.svg"
// import nineClubs from "../Images/9_of_clubs.svg"
// import tenClubs from "../Images/10_of_clubs.svg"
// import jackClubs from "../Images/jack_of_clubs.svg"
// import queenClubs from "../Images/queen_of_clubs.svg"
// import kingClubs from "../Images/king_of_clubs.svg"
// import aceDiamonds from "../Images/ace_of_diamonds.svg"
// import twoDiamonds from "../Images/2_of_diamonds.svg"
// import threeDiamonds from "../Images/3_of_diamonds.svg"
// import fourDiamonds from "../Images/4_of_diamonds.svg"
// import fiveDiamonds from "../Images/5_of_diamonds.svg"
// import sixDiamonds from "../Images/6_of_diamonds.svg"
// import sevenDiamonds from "../Images/7_of_diamonds.svg"
// import eightDiamonds from "../Images/8_of_diamonds.svg"
// import nineDiamonds from "../Images/9_of_diamonds.svg"
// import tenDiamonds from "../Images/10_of_diamonds.svg"
// import jackDiamonds from "../Images/jack_of_diamonds.svg"
// import queenDiamonds from "../Images/queen_of_diamonds.svg"
// import kingDiamonds from "../Images/king_of_diamonds.svg"

// Functions, Hit, Stand, Double, Split

const App = () => {
  const [deck, setDeck] = useState([])
  const [userHandOne, setUserHandOne] = useState([])
  const [userHandTwo, setUserHandTwo] = useState([])
  const [houseHand, setHouseHand] = useState([])

  const [handOneTotal, setHandOneTotal] = useState(0)
  // const [handTwoTotal, setHandTwoTotal] = useState(0)
  const [houseTotal, setHouseTotal] = useState(0)

  // const [playerTotal, setPlayerTotal] = useState(0)
  // more descriptive, refactor and change name.

  const createDeck = () => {
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
    // console.log("Created Deck", deck)
    // 1 card of house displayed, .
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
    // console.log("Deck Shuffled", deck)
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
    // setUserHandTwo(userHandTwo)
    setHouseHand(houseHand)
    console.log("User Hand 1", userHandOne)
    // console.log("User Hand 2", userHandTwo)
    console.log("House Hand", houseHand)

    HouseTotal()
    PlayerTotal()
  }

  const Hit = (key, setKey) => {
    for (let i = 0; i < 1; i++) {
      const card = deck.pop()
      key.push(card)
    }
    setKey([...key])
    // PlayerTotal()
    if (handOneTotal > 21) {
      console.log("Player BUSTS (hit)", handOneTotal)
    }
    // PreEvalBust()
    // HouseTotal()
  }

  useEffect(() => {
    // checking Player Total
    const total = userHandOne.map(card => {
      return card.number
    })
    const newTotal = total.reduce((a, c) => {
      return a + c
    }, 0)
    setHandOneTotal(newTotal)
    console.log("(useEffect) player total", handOneTotal)

    // if (handOneTotal > 21) {
    //   console.log("Player BUSTS")
    // }
    // console.log("(useEffect) player total was updated")
  }, [userHandOne])

  useEffect(() => {
    //checking House Total
    const total = houseHand.map(card => {
      return card.number
    })
    const newTotal = total.reduce((a, c) => {
      return a + c
    }, 0)
    setHouseTotal(newTotal)
    console.log("(useEffect) House total", houseTotal)
    // if (houseTotal > 21) {
    //   console.log("House BUSTS")
    // }
    // console.log("(useEffect) House total was updated")
  }, [houseHand])

  useEffect(
    handOneTotal => {
      // creating a preEval
      if (handOneTotal > 21) {
        console.log("Player BUSTS", handOneTotal)
      }
    },
    [userHandOne]
  )

  const PreEvalBust = () => {
    // PlayerTotal()
    if (handOneTotal === 22) {
      console.log("Player BUSTS (preEval)", handOneTotal)
    } else if (handOneTotal > 22) {
      console.log("Player BUSTS (preEval)", handOneTotal)
    }
  }

  const Stay = () => {
    // HouseTotal()
    if (houseTotal <= 16) {
      Hit(houseHand, setHouseHand)
      // HouseTotal()
      console.log("(Stay) House Hits and total is", houseTotal)
      // Stay() // Recursive call if houseTotal still under 16
    } else if (houseTotal > 16 && houseTotal < 22) {
      EvaluateEndGame()
    } else {
      console.log("House BUSTS")
    }
  }

  const EvaluateEndGame = () => {
    // WIN, <21
    if (houseTotal > handOneTotal && houseTotal < 22) {
      console.log("House Wins!")
    } else if (handOneTotal > houseTotal && handOneTotal < 22) {
      console.log("Player Wins!")
      // DRAW
    } else if (houseTotal === 21 && handOneTotal === 21) {
      console.log("21, Stalemate, PUSH, Draw")
    } else if (houseTotal === handOneTotal) {
      console.log("PUSH")
    }
  }

  const PlayerTotal = () => {
    const total = userHandOne.map(card => {
      return card.number
    })
    const newTotal = total.reduce((a, c) => {
      return a + c
    })
    setHandOneTotal(newTotal)
    console.log(" (PlayerTotal func) PLayer Hand Total", handOneTotal)
  }

  const HouseTotal = () => {
    const total = houseHand.map(card => {
      return card.number
    })
    const newTotal = total.reduce((a, c) => {
      return a + c
    })
    setHouseTotal(newTotal)
    // console.log("(HTF) House Total is", newTotal)
  }

  // How to determine round being played? House will check for conditionals under 18 to hit or stay.

  useEffect(() => {
    createDeck()
  }, [])

  const PlayAgain = () => {
    setUserHandOne([])
    setUserHandTwo([])
    setHouseHand([])
    setHandOneTotal(0)
    setHouseTotal(0)
  }

  // setup useEffect that calls create deck and other functions upon page load
  return (
    <div>
      <>
        <main>
          <section className='top-section'>
            <h1 className='blackjack'>Blackjack</h1>
            <img alt='something' src='.\assets\background\black_card.jpeg' />

            {/* <!-- Choices Area --> */}
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
              <button
                className='hit-button button'
                onClick={() => Hit(userHandOne, setUserHandOne)}
              >
                Hit
              </button>
              <button className='stand-button button' onClick={() => Stay()}>
                Stay
              </button>
            </section>
            <section>
              <button className='' onClick={PlayAgain}>
                Play Again
              </button>
            </section>
          </section>

          {/* <!-- Player/Hand Area --> */}
          <section className='all-players-section'>
            <section className='player-1-section player'>
              Player 1
              <input
                type='text'
                className='player-1-input '
                placeholder='Enter Your Name'
              />
              <p className='player-1-cards'></p>
              {/* <button className='player-1-show-cards-button button'>
                Show Cards
              </button> */}
              <ul>
                {userHandOne.map((card, i) => {
                  return (
                    <li key={i}>
                      {" "}
                      {card.rank} of {card.suit}
                    </li>
                  )
                })}
                <section>
                  <ul>
                    <li>PlayerTotal = {handOneTotal}</li>
                  </ul>
                </section>
              </ul>
            </section>

            <section className='player-house-section player'>
              House
              <p className='player-house-cards'></p>
              {/* <button className='player-house-show-cards-button button'>
                Show Cards
              </button> */}
              <ul>
                {houseHand.map((card, i) => {
                  return (
                    <li kay={i}>
                      {card.rank} of {card.suit}
                    </li>
                  )
                })}
                <section>
                  <ul>
                    <li>House Total = {houseTotal}</li>
                  </ul>
                </section>
              </ul>
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
          <span className='footer-p'>
            Made with <span role='img'>💛</span> at SDG
          </span>
        </footer>
      </>
    </div>
  )
}

export default App

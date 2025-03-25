import { languages } from './languages.js'
import { useState } from 'react'
import clsx from 'clsx'


export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])
  
  function addGuessedLetter(letter) {
      setGuessedLetters(prevLetters => 
          prevLetters.includes(letter) ? // We do this so that if the clicked letter exists, it doesn't get added over and over again on each click
              prevLetters : 
              [...prevLetters, letter]

          // We can achieve the same using a set because set doesn't allow duplicates
          // Here we don't really NEED to use a Set but it is a nice approach (faster also - not neccessarily in this case, but usually)
          /*
          const lettersSet = new Set(prevLetters)
            lettersSet.add(letter)
            return Array.from(lettersSet) 
          */
      )
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const letters = currentWord.split('').map((letter, index) => (
      <span key={index} className='letter'>{letter.toUpperCase()}</span> // We are only index as a key here because we will not rearrange the letters, otherwise it is not recommended
    ))

  const languageChips = languages.map(language => {
    const styles = {
        color: language.color,
        backgroundColor: language.backgroundColor
    }
    return (
        <span 
          style={styles}
          className="chip"
          key={language.name}
        >
          {language.name}
        </span>
    )
  })

  const alphabetLetters = alphabet.toUpperCase().split('').map(letter => {
    const isGuessed = guessedLetters.includes(letter) // Check if the letter has been guessed
    const isInWord = currentWord.toUpperCase().includes(letter) // Check if the letter is in the word
    
    const buttonClass = clsx("alphabetLetterBtn", {
        'btn-included': isGuessed && isInWord, // If guessed (clicked by the user) and in the word (we enable it (green background color))
        'btn-notIncluded': isGuessed && !isInWord // If guessed but not in the word (we disable id (red bg color))
    })

    return (
      <button
        key={letter}
        onClick={() => addGuessedLetter(letter)}
        className={buttonClass}
      >
        {letter}
      </button>
    )
  })

  return (
      <main>
          <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
          </header>
          <section className="status-section">
              <h2>You Win!</h2>
              <p>Well done! 🎉</p>
          </section>
          <section className="language-chips">
              {languageChips}
          </section>
          <section className='letters'>{letters}</section>
          <section className='alphabetLetters'>{alphabetLetters}</section>
          <button className="new-game">New Game</button>
      </main>
  )
}
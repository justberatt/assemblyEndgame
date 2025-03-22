import { languages } from './languages.js'
import { useState } from 'react'

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react")

  const letters = currentWord.toUpperCase().split('').map((letter, index) => (
      <span key={index} className='letter'>{letter}</span> // We are only index as a key here because we will not rearrange the letters, otherwise it is not recommended
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
      </main>
  )
}
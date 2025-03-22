import { languages } from './languages.js'

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

export default function AssemblyEndgame() {
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
        </main>
    )
}
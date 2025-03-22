/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

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
        </main>
    )
}
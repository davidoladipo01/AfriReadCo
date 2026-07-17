import book1 from '../assets/play_result.webp'
import book2 from '../assets/bk17_result_result.webp'
import book3 from '../assets/bk12_result.webp'
import person1 from '../assets/ama_result_result.webp'
import person2 from '../assets/couple_result_result.webp'
import person3 from '../assets/emeka_result_result.webp'

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-bg-pattern" aria-hidden="true" />
      <div className="cta-bg-glow cta-bg-glow-1" aria-hidden="true" />
      <div className="cta-bg-glow cta-bg-glow-2" aria-hidden="true" />

      <div className="cta-container">
        {/* LEFT SIDE */}
        <div className="cta-left">
          <span className="cta-badge">JOIN AFRIREADCO</span>

          <h2 className="cta-heading">
            Every Great Story Begins With a Reader.
          </h2>

          <p className="cta-subtext">
            Discover books that speak to your soul, join reading clubs that
            feel like home, take on challenges that push you further, and
            connect with readers from every corner of Africa. Your next
            favorite story — and community — is waiting.
          </p>

          <div className="cta-buttons">
            <button className="cta-btn cta-btn-primary">Join for Free</button>
            <button className="cta-btn cta-btn-secondary">
              Explore Communities
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="cta-right">
          <div className="cta-composition">

            {/* Book covers */}
            <div className="book-cover book-cover-1">
              <img className="book-cover-image" src={book1} alt="Featured book cover" />
            </div>
            <div className="book-cover book-cover-2">
              <img className="book-cover-image" src={book2} alt="Featured book cover" />
            </div>
            <div className="book-cover book-cover-3">
              <img className="book-cover-image" src={book3} alt="Featured book cover" />
            </div>

            {/* Floating badges */}
            <div className="floating-badge badge-streak">
              <span className="badge-emoji">🔥</span>
              <span className="badge-text">12 Day Streak</span>
            </div>

            <div className="floating-badge badge-club">
              <span className="badge-emoji">📚</span>
              <span className="badge-text">Book Club Joined</span>
            </div>

            <div className="floating-badge badge-goal">
              <span className="badge-emoji">🎯</span>
              <span className="badge-text">Reading Goal 60%</span>
            </div>

            {/* Member avatar stack */}
            <div className="avatar-stack">
              <img className="avatar avatar-1" src={person1} alt="Reader avatar" />
              <img className="avatar avatar-2" src={person2} alt="Reader avatar" />
              <img className="avatar avatar-3" src={person3} alt="Reader avatar" />
              <div className="avatar avatar-more">+10</div>
            </div>

            {/* Decorative sparkles */}
            <span className="sparkle sparkle-1">✦</span>
            <span className="sparkle sparkle-2">✧</span>
            <span className="sparkle sparkle-3">✦</span>

            {/* Abstract shapes */}
            <div className="abstract-shape shape-circle" />
            <div className="abstract-shape shape-ring" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

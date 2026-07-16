import book2 from '../assets/bk17.jpeg'
const ReadingDashboard = () => {

  return (
    <section className="dashboard-section">

      <div className="dashboard-container">

        {/* LEFT */}

        <div className="dashboard-content">

          <span className="dashboard-tag">
            READING DASHBOARD
          </span>

          <h2>
            Build Better Reading Habits.
          </h2>

          <p>
            Stay motivated with personalized reading goals, daily streaks,
            insightful statistics and achievement badges as you journey through
            African literature.
          </p>

          <div className="dashboard-features">

            <div className="feature">
              <span className="material-symbols-outlined">
                task_alt
              </span>

              <div>
                <h4>Annual Reading Goals</h4>
                <p>Track every book towards your yearly target.</p>
              </div>
            </div>

            <div className="feature">
              <span className="material-symbols-outlined">
                local_fire_department
              </span>

              <div>
                <h4>Reading Streaks</h4>
                <p>Keep your momentum alive every single day.</p>
              </div>
            </div>

            <div className="feature">
              <span className="material-symbols-outlined">
                insights
              </span>

              <div>
                <h4>Reading Insights</h4>
                <p>Discover your favourite genres and reading pace.</p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="dashboard-card">

          <div className="goal-badge">
            2026 Goal
          </div>

          <h3>
            Your Reading Progress
          </h3>

          <div className="progress-card">

            <div className="progress-header">

              <span>Annual Goal</span>

              <span className="progress-number">
                18 / 30 Books
              </span>

            </div>

            <div className="progress-bar">

              <div className="progress-fill"></div>

            </div>

          </div>

          <div className="stats-grid">

            <div className="stat-box">

              <span className="material-symbols-outlined">
                local_fire_department
              </span>

              <h4>12</h4>

              <p>Day Streak</p>

            </div>

            <div className="stat-box">

              <span className="material-symbols-outlined">
                menu_book
              </span>

              <h4>42</h4>

              <p>Pages Today</p>

            </div>

            <div className="stat-box">

              <span className="material-symbols-outlined">
                workspace_premium
              </span>

              <h4>8</h4>

              <p>Badges</p>

            </div>

            <div className="stat-box">

              <span className="material-symbols-outlined">
                auto_stories
              </span>

              <h4>127</h4>

              <p>Books Read</p>

            </div>

          </div>

          <div className="recent-book">

            <div className="book-cover">

              <img src={book2} alt="The Fishermen book cover" />

            </div>

            <div className="book-details">

              <small>Currently Reading</small>

              <h4>Yinka, Where is your husband</h4>

              <p>Lizzy Damilola Blackburn</p>

              <div className="mini-progress">

                <div></div>

              </div>

              <span>85% Complete</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ReadingDashboard

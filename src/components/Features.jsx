import React from 'react';
import readingChallengeImg from '../assets/Features/imgreading.webp';
import discoverBooksImg from '../assets/Features/imgreading2.webp';
import progressTrackImg from '../assets/Features/imgreading3.webp';
import discussionsImg from '../assets/Features/imgreading4.webp';

const features = [
  {
    title: 'Reading Challenges',
    src: readingChallengeImg,
    alt: 'A person reading with a challenge tracker',
    text: 'Join exciting monthly and yearly reading challenges designed to keep your reading journey consistent.',
  },
  {
    title: 'Discover New Books',
    src: discoverBooksImg,
    alt: 'A reader exploring a collection of books',
    text: 'Find incredible African literature through community recommendations.',
  },
  {
    title: 'Track Your Progress',
    src: progressTrackImg,
    alt: 'A reader tracking their reading progress',
    text: 'Log your reads, monitor your reading streaks, and keep your personal library beautifully organized.',
  },
  {
    title: 'Join Discussions',
    src: discussionsImg,
    alt: 'Readers discussing books together',
    text: 'Connect with fellow readers, participate in book clubs, and share your thoughts on every story.',
  },
];

function Features() {
  return (
    <div>
      <section className="features-section">
        <div className="features-header">
          <span className='section-tag'>BUILT FOR AFRICAN READERS</span>

          <h2>Everything your reading journey needs</h2>

          <p>
            Discover books, join communities, track your progress, and celebrate
            African stories—all in one place.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img src={feature.src} alt={feature.alt} />
              <h3>{feature.title}</h3>

              <div className="feature-underline"></div>

              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Features;

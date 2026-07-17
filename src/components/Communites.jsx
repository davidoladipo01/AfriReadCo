import person1 from '../assets/ama_result_result.webp'
import person2 from '../assets/couple_result_result.webp'
import person3 from '../assets/emeka_result_result.webp'
import book1 from '../assets/play_result.webp'
import book2 from '../assets/bk17_result_result.webp'
import book3 from '../assets/mary_result_result.webp'

const Communites = () => {
  const communities = [
    {
      id: 1,
      image: person1,
      bookImage: book1,
      title: "Amara Reads Book Club",
      moderator: "Amara moderates",
      description:
        "Modern African fiction, lively monthly reads and warm conversations.",
      members: "1.2k (Projected)",
    },
    {
      id: 2,
      image: person2,
      bookImage: book2,
      title: "Zaire and Momo's Club 🩵",
      moderator: "Kemi moderates",
      description:
        "A shared home for timeless African classics and thoughtful readers.",
      members: "3.5k (Projected)",
    },
    {
      id: 3,
      image: person3,
      bookImage: book3,
      title: "The Essien Book Hub",
      moderator: "Nia moderates",
      description:
        "Poetry, creative writing prompts and feedback from fellow storytellers.",
      members: "850 (Projected)",
    },
  ];
  return (
      <section className="communities-section">

      <div className="communities-header">

        <span className="section-tag">
          COMMUNITY
        </span>

        <h2>
          Find Your Reading Circle
        </h2>

        <p>
          Stories become even more meaningful when shared. Connect with readers,
          participate in discussions and discover your next favourite book
          together.
        </p>

      </div>

      <div className="communities-grid">

        {communities.map((community) => (

          <div className="community-card" key={community.id}>

            <div className="community-media">
              <img
                src={community.image}
                alt={`${community.title} community`}
                className="community-image"
              />

              <img
                src={community.bookImage}
                alt=""
                className="community-book"
                aria-hidden="true"
              />
            </div>

            <div className="community-content">

              <span className="community-moderator">
                {community.moderator}
              </span>

              <h3>
                {community.title}
              </h3>

              <p>
                {community.description}
              </p>

              <div className="community-footer">

                <small>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    group
                  </span>
                  {community.members}
                </small>

                <button>
                  Join
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Communites

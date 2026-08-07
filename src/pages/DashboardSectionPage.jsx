const DashboardSectionPage = ({ title }) => {
  const contentMap = {
    Communities: {
      eyebrow: "Coming soon",
      headline: "Communities are on the way",
      body: "We’re building shared reading circles, member highlights, and thoughtful discussion spaces for your next bookish hangout.",
    },
    Discover: {
      eyebrow: "Coming soon",
      headline: "Discovery is getting a fresh start",
      body: "Soon you’ll be able to explore curated reads, trending picks, and personalised recommendations in one place.",
    },
    Analytics: {
      eyebrow: "Coming soon",
      headline: "Your reading insights are almost here",
      body: "Track your habits, trends, and progress with clearer analytics designed to keep you inspired.",
    },
  };

  const content = contentMap[title] || {
    eyebrow: "Coming soon",
    headline: `${title} is on the way`,
    body: "This section is still being polished for you. Check back soon for something exciting.",
  };

  return (
    <section className="dashboard-page">
      <div className="coming-soon-card">
        <div className="coming-soon-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 3l2.2 5.4L20 10l-4.8 3.6L16.6 20 12 16.6 7.4 20l1.4-6.4L4 10l5.8-.6L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="coming-soon-eyebrow">{content.eyebrow}</p>
        <h1 className="font-headline-lg text-headline-lg text-on-surface coming-soon-title">
          {content.headline}
        </h1>
        <p className="coming-soon-copy">{content.body}</p>

        <div className="coming-soon-pill-row">
          <span className="coming-soon-pill">Curated experience</span>
          <span className="coming-soon-pill">New updates soon</span>
        </div>
      </div>
    </section>
  );
};

export default DashboardSectionPage;

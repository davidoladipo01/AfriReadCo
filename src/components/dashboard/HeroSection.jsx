const HeroSection = () => (
  <section className="grid grid-cols-12 gap-8">
    <div className="lg:col-span-8 relative overflow-hidden border-none text-white flex flex-col justify-center">
      <div className="rounded-3xl hero-gradient p-10 text-white relative overflow-hidden flex items-center justify-between min-h-[382px]">
        <div className="z-10 max-w-lg">
          <h2 className="text-4xl font-serif font-bold mb-2">Welcome back, David 👋</h2>
          <p className="text-white/80 mb-8">Your next great African story is waiting.</p>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <blockquote className="italic text-lg font-serif mb-4 leading-relaxed">"Until the lions have their own historians, the history of the hunt will always glorify the hunter."</blockquote>
            <p className="text-sm font-semibold opacity-90">— Chinua Achebe</p>
          </div>
        </div>
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-90 hidden lg:block">
          <img alt="Books Illustration" className="w-[500px] object-contain rotate-[-5deg]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy2R-3LB84k2d4xKDbrzm0RdpFX8dZRH7sfsMFsWQvONg0p5GrptS8gtRsaHf9f6CcGiXlDnlssVYpUFeBeqUWy8hoAs-GDpA4Nzgf1QTBT9KZSxodY-Sibcy1rtQ3ju-n2auIFkYIFXFo_kygDpcUUCjpE0YdaY5XkwUcjWtdrzOYcpNpAI1XZiFJOa7hx249v6egXyfwupOIxef4NEHDdMP4MdA2DjjbXUrNPBH_gJR7TxVy9baRDdWQSk2mGbag2Q" />
        </div>
      </div>
    </div>
    <div className="lg:col-span-4 flex flex-col gap-gutter">
      <div className="bento-card bg-surface-container-low border-outline-variant/20 flex flex-col justify-center italic">
        <span className="material-symbols-outlined text-primary mb-4 text-4xl">format_quote</span>
        <p className="font-headline-md text-on-surface-variant mb-4">"The world is like a Mask dancing. If you want to see it well, you do not stand in one place."</p>
        <p className="font-label-md uppercase tracking-widest text-primary">— Chinua Achebe</p>
      </div>
      <div className="bento-card flex items-center justify-between border-primary/20 bg-primary-fixed/10">
        <div><p className="text-label-md text-on-surface-variant font-bold">READING STREAK</p><p className="font-display-lg text-headline-lg text-primary">18 Days</p></div>
        <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center"><span className="material-symbols-outlined text-primary text-4xl" data-weight="fill">local_fire_department</span></div>
      </div>
    </div>
  </section>
);

export default HeroSection;

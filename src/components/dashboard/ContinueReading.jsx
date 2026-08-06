const ContinueReading = () => (
  <div className="lg:col-span-8 flex flex-col gap-6">
    <div className="flex justify-between items-center">
      <h2 className="font-headline-lg text-headline-lg text-on-surface">
        Continue Reading
      </h2>
      <a className="text-primary font-bold hover:underline" href="#">
        View All Bookshelf
      </a>
    </div>
    <div className="bento-card flex flex-col md:flex-row gap-8 items-center bg-surface-container-low border-none premium-shadow">
      <div className="w-full md:w-1/3">
        <img
          className="w-full rounded-xl shadow-lg"
          alt="Book cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvHtBQ6kQrkDUdFiroxx8hwYNnV-nFnUsmQquqyE5Bs6iXns_qTKCKpI2OjZhzRQSP6HyTPHUzhODve9F1TSLnM_rzDMEzx7ZcSxq9Fg0WAWIWrusrTRakMRFh6F0wY28Xdbr_nMxubV14zmty_cOcwsQr-T13BLTFG5ysgJcBzbekGxJN45B43PGcCC19PGFErzJOFEZWlES_r_APwT4El2eKbl7TELaRWjW96apLjnKOf-GKdn8"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <span className="text-label-md bg-primary/10 text-primary px-3 py-1 rounded-full self-start">
          Current Read
        </span>
        <h3 className="font-display-lg text-headline-lg text-on-surface leading-tight">
          The Harvest of Stars
        </h3>
        <p className="text-body-lg text-on-surface-variant">Chioma Achebe</p>
        <div className="mt-4">
          <div className="flex justify-between text-label-md text-on-surface-variant mb-2">
            <span>44% Complete</span>
            <span>142 of 320 pages</span>
          </div>
          <div className="w-full bg-surface-variant h-3 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[44%]" />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="bg-[#C65D3B] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
            <span className="material-symbols-outlined">menu_book</span>Resume
            Reading
          </button>
          <button className="border-2 border-outline-variant text-on-surface-variant px-6 py-3 rounded-xl font-bold hover:bg-surface-variant/20 transition-colors">
            Notes &amp; Reviews
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default ContinueReading;

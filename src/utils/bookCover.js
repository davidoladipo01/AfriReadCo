export const FALLBACK_BOOK_COVER = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f4e7dc"/>
        <stop offset="100%" stop-color="#d9b89a"/>
      </linearGradient>
    </defs>
    <rect width="600" height="900" fill="url(#bg)"/>
    <rect x="70" y="70" width="460" height="760" rx="24" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.4)"/>
    <circle cx="300" cy="290" r="92" fill="rgba(255,255,255,0.18)"/>
    <path d="M240 392c18-48 58-78 107-78s89 30 107 78v132H240V392Z" fill="rgba(255,255,255,0.18)"/>
    <text x="300" y="640" text-anchor="middle" fill="#2b1f1a" font-size="52" font-family="Arial, sans-serif" font-weight="700">Book</text>
    <text x="300" y="700" text-anchor="middle" fill="#2b1f1a" font-size="32" font-family="Arial, sans-serif">cover</text>
  </svg>
`)}`;

export const getBookCoverUrl = (book) => {
  if (!book) return FALLBACK_BOOK_COVER;

  return (
    book.coverImage ||
    book.image ||
    book.cover ||
    book.cover_url ||
    book.thumbnail ||
    FALLBACK_BOOK_COVER
  );
};

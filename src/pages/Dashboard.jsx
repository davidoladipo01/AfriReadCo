// import HeroSection from "../components/dashboard/HeroSection";
// import DashboardStats from "../components/dashboard/DashboardStats";
// import ReadingOverview from "../components/dashboard/ReadingOverview";
// import BookshelfAndActivity from "../components/dashboard/BookshelfAndActivity";
// import ReadingHeatmap from "../components/dashboard/ReadingHeatmap";

// const Dashboard = () => {
//     return (
//         <div className="dashboard-page max-w-container-max mx-auto px-margin-desktop py-12 flex flex-col gap-12">
//             <HeroSection />
//             <DashboardStats />
//             <ReadingOverview />
//             <BookshelfAndActivity />
//             <ReadingHeatmap />
//         </div>
//     );
// };

// export default Dashboard;

import HeroSection from "../components/dashboard/HeroSection";
import DashboardStats from "../components/dashboard/DashboardStats";
import ReadingOverview from "../components/dashboard/ReadingOverview";
import BookshelfAndActivity from "../components/dashboard/BookshelfAndActivity";
import ReadingHeatmap from "../components/dashboard/ReadingHeatmap";

const Dashboard = () => {
    return (
        <div className="dashboard-page flex flex-col gap-12">
            <HeroSection />
            <DashboardStats />
            <ReadingOverview />
            <BookshelfAndActivity />
            <ReadingHeatmap />
        </div>
    );
};

export default Dashboard;

// const Dashboard = () => {
//   return (
//     <>
//       {/* TopNavBar */}
//       <header className="bg-surface/40 dark:bg-surface-dim/40 backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-[0px_10px_30px_rgba(90,62,43,0.08)] h-20">
//         <div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max mx-auto h-full">
//           {/* Brand */}
//           <div className="flex items-center gap-3">
//             <img
//               alt="AfriReadCo Logo"
//               className="h-10 w-auto rounded-md"
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5TxtwpjdpuHy2g--A5RoIVy63e9kxDcM0bmawNUiUQCvAd8C3kz7nfLI9z5tJe0ysMGlxMrs-zBz3DpKHv45K3wppgWkOyTmzYcDq3SqYAZ3zBNwEAshhNI2D1CkPL3XDb6b6Nx-D_B7yQzC0uf-vPGmUEZ_IXN8NF9VJmiRf_mIFV523i7xGjyMqokaC6ywmVmA21quuxz7WgEADDxCJE4x8ahTlhyjp7MRRRyp8svKUcZnxJ0Y"
//             />
//             <span className="font-display-lg text-headline-md text-primary tracking-tight">
//               AfriReadCo
//             </span>
//           </div>
          
//           {/* Search Center */}
//           <div className="hidden md:flex flex-1 max-w-md mx-8">
//             <div className="relative w-full">
//               <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
//                 search
//               </span>
//               <input
//                 className="w-full bg-surface-container-low border-none rounded-full py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-primary text-body-md"
//                 placeholder="Search for books, authors, circles..."
//                 type="text"
//               />
//             </div>
//           </div>
          
//           {/* Nav Links & Profile */}
//           <nav className="flex items-center gap-8">
//             <div className="hidden lg:flex gap-6 items-center">
//               <a className="text-primary font-bold border-b-2 border-primary py-1 hover:text-primary-container transition-colors" href="#">
//                 Dashboard
//               </a>
//               <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">
//                 Books
//               </a>
//               <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">
//                 Communities
//               </a>
//               <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">
//                 Discover
//               </a>
//             </div>
            
//             <div className="flex items-center gap-4 border-l border-outline-variant/30 pl-8">
//               <div className="flex items-center gap-6 cursor-pointer group">
//                 <img
//                   className="w-10 h-10 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-all"
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvsvDCf_YxcG_F8cy0MUGDG2dJKYRdX-hmPGyxz67CvOZhfc384WD0dtgPAxZgkIJriiKXyz29zUS78LUNrd5oT3ppiCRuQs5xkxXbkfAxyJ2DZpl9sp-AoOTlLNAOa-oAiXbPkM0q-daxdJ9Jw5_cZt6UlJEPViutESmnXkfYKt28boRaZA_I1KKxHw2ZwMGzVMr-mVM98Xlf-BlIOYUTeqolC9L5JBvuye3tMybkFByGduQnCRI"
//                   alt="David"
//                 />
//                 <div className="flex items-baseline gap-2">
//                   <p className="font-bold text-on-surface leading-none">David</p>
//                   <p className="text-label-md text-on-surface-variant italic opacity-80"></p>
//                 </div>
//               </div>
              
//               <button className="relative text-on-surface-variant hover:text-primary transition-colors ml-2">
//                 <span className="material-symbols-outlined">notifications</span>
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
//               </button>
//             </div>
//           </nav>
//         </div>
//       </header>

//       <main className="max-w-container-max mx-auto px-margin-desktop py-12 flex flex-col gap-12">
//         {/* Hero Section: Bento Style */}
//         <section className="grid grid-cols-12 gap-8">
//           {/* Main Hero Card */}
//           <div className="lg:col-span-8 relative overflow-hidden border-none text-white flex flex-col justify-center">
//             <div className="rounded-3xl hero-gradient p-10 text-white relative overflow-hidden flex items-center justify-between min-h-[382px]">
//               <div className="z-10 max-w-lg">
//                 <h2 className="text-4xl font-serif font-bold mb-2">
//                   Welcome back, David 👋
//                 </h2>
//                 <p className="text-white/80 mb-8">
//                   Your next great African story is waiting.
//                 </p>
//                 <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
//                   <blockquote className="italic text-lg font-serif mb-4 leading-relaxed">
//                     "Until the lions have their own historians, the history of the
//                     hunt will always glorify the hunter."
//                   </blockquote>
//                   <p className="text-sm font-semibold opacity-90">— Chinua Achebe</p>
//                 </div>
//               </div>
              
//               {/* Visual Element Placeholder */}
//               <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-90 hidden lg:block">
//                 <img
//                   alt="Books Illustration"
//                   className="w-[500px] object-contain rotate-[-5deg]"
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy2R-3LB84k2d4xKDbrzm0RdpFX8dZRH7sfsMFsWQvONg0p5GrptS8gtRsaHf9f6CcGiXlDnlssVYpUFeBeqUWy8hoAs-GDpA4Nzgf1QTBT9KZSxodY-Sibcy1rtQ3ju-n2auIFkYIFXFo_kygDpcUUCjpE0YdaY5XkwUcjWtdrzOYcpNpAI1XZiFJOa7hx249v6egXyfwupOIxef4NEHDdMP4MdA2DjjbXUrNPBH_gJR7TxVy9baRDdWQSk2mGbag2Q"
//                 />
//               </div>
//             </div>
//           </div>
          
//           {/* Quote & Streak Cards */}
//           <div className="lg:col-span-4 flex flex-col gap-gutter">
//             <div className="bento-card bg-surface-container-low border-outline-variant/20 flex flex-col justify-center italic">
//               <span className="material-symbols-outlined text-primary mb-4 text-4xl">
//                 format_quote
//               </span>
//               <p className="font-headline-md text-on-surface-variant mb-4">
//                 "The world is like a Mask dancing. If you want to see it well, you
//                 do not stand in one place."
//               </p>
//               <p className="font-label-md uppercase tracking-widest text-primary">
//                 — Chinua Achebe
//               </p>
//             </div>
            
//             <div className="bento-card flex items-center justify-between border-primary/20 bg-primary-fixed/10">
//               <div>
//                 <p className="text-label-md text-on-surface-variant font-bold">
//                   READING STREAK
//                 </p>
//                 <p className="font-display-lg text-headline-lg text-primary">
//                   18 Days
//                 </p>
//               </div>
//               <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center">
//                 <span className="material-symbols-outlined text-primary text-4xl" data-weight="fill">
//                   local_fire_department
//                 </span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Stats & Goals Section */}
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
//           {/* Circular Goal */}
//           <div className="bento-card flex flex-col items-center text-center gap-4">
//             <div className="relative w-32 h-32">
//               <svg className="w-full h-full">
//                 <circle
//                   className="text-surface-variant"
//                   cx="64"
//                   cy="64"
//                   fill="transparent"
//                   r="58"
//                   stroke="currentColor"
//                   strokeWidth="8"
//                 ></circle>
//                 <circle
//                   cx="64"
//                   cy="64"
//                   r="58"
//                   fill="transparent"
//                   className="text-tertiary-container"
//                   stroke="currentColor"
//                   strokeDasharray="364.4"
//                   strokeDashoffset="145.7"
//                   strokeLinecap="round"
//                   strokeWidth="8"
//                   style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
//                 ></circle>
//               </svg>
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <span className="font-display-lg text-headline-md text-on-surface">
//                   12
//                 </span>
//                 <span className="text-label-md text-on-surface-variant">of 20</span>
//               </div>
//             </div>
//             <p className="font-bold text-on-surface">Annual Reading Goal</p>
//           </div>
          
//           {/* Daily Challenge */}
//           <div className="bento-card flex flex-col gap-4">
//             <div className="flex justify-between items-start">
//               <p className="font-bold text-on-surface">Today's Challenge</p>
//               <span className="text-label-md bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">
//                 +50 XP
//               </span>
//             </div>
//             <p className="text-body-md text-on-surface-variant">
//               Read 25 pages today
//             </p>
//             <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden mt-auto">
//               <div className="bg-primary h-full w-[65%]"></div>
//             </div>
//             <p className="text-label-md text-on-surface-variant text-right">
//               16/25 pages
//             </p>
//           </div>
          
//           {/* Active Club */}
//           <div className="bento-card border-tertiary/20 bg-tertiary-fixed/10 flex flex-col gap-4">
//             <p className="text-label-md text-tertiary font-bold tracking-wider">
//               ACTIVE CLUB
//             </p>
//             <div>
//               <h3 className="font-headline-md text-on-surface leading-tight">
//                 African Fantasy Circle
//               </h3>
//               <p className="text-body-md text-on-surface-variant mt-1">
//                 Live discussion in 2h 15m
//               </p>
//             </div>
//             <button className="w-full py-2.5 rounded-xl bg-tertiary text-white font-bold hover:bg-tertiary/90 transition-colors mt-auto">
//               Join Circle
//             </button>
//           </div>
          
//           {/* Achievement Showcase */}
//           <div className="bento-card flex flex-col gap-4">
//             <p className="font-bold text-on-surface">Recent Achievements</p>
//             <div className="flex gap-4">
//               <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center" title="First Review">
//                 <span className="material-symbols-outlined text-primary">
//                   rate_review
//                 </span>
//               </div>
//               <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center" title="10 Books Completed">
//                 <span className="material-symbols-outlined text-tertiary">
//                   military_tech
//                 </span>
//               </div>
//               <div className="w-12 h-12 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center text-outline-variant">
//                 <span className="material-symbols-outlined">lock</span>
//               </div>
//             </div>
//             <p className="text-label-md text-on-surface-variant mt-auto">
//               Unlock "Library Master" by completing 3 more reviews.
//             </p>
//           </div>
//         </section>

//         {/* Main Content Area: Continue Reading & Analytics */}
//         <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
//           {/* Continue Reading Section */}
//           <div className="lg:col-span-8 flex flex-col gap-6">
//             <div className="flex justify-between items-center">
//               <h2 className="font-headline-lg text-headline-lg text-on-surface">
//                 Continue Reading
//               </h2>
//               <a className="text-primary font-bold hover:underline" href="#">
//                 View All Bookshelf
//               </a>
//             </div>
//             <div className="bento-card flex flex-col md:flex-row gap-8 items-center bg-surface-container-low border-none premium-shadow">
//               <div className="w-full md:w-1/3">
//                 <img
//                   className="w-full rounded-xl shadow-lg"
//                   alt="Book cover"
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvHtBQ6kQrkDUdFiroxx8hwYNnV-nFnUsmQquqyE5Bs6iXns_qTKCKpI2OjZhzRQSP6HyTPHUzhODve9F1TSLnM_rzDMEzx7ZcSxq9Fg0WAWIWrusrTRakMRFh6F0wY28Xdbr_nMxubV14zmty_cOcwsQr-T13BLTFG5ysgJcBzbekGxJN45B43PGcCC19PGFErzJOFEZWlES_r_APwT4El2eKbl7TELaRWjW96apLjnKOf-GKdn8"
//                 />
//               </div>
//               <div className="flex-1 flex flex-col gap-4">
//                 <span className="text-label-md bg-primary/10 text-primary px-3 py-1 rounded-full self-start">
//                   Current Read
//                 </span>
//                 <h3 className="font-display-lg text-headline-lg text-on-surface leading-tight">
//                   The Harvest of Stars
//                 </h3>
//                 <p className="text-body-lg text-on-surface-variant">Chioma Achebe</p>
//                 <div className="mt-4">
//                   <div className="flex justify-between text-label-md text-on-surface-variant mb-2">
//                     <span>44% Complete</span>
//                     <span>142 of 320 pages</span>
//                   </div>
//                   <div className="w-full bg-surface-variant h-3 rounded-full overflow-hidden">
//                     <div className="bg-primary h-full w-[44%]"></div>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 mt-4">
//                   <button className="bg-[#C65D3B] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
//                     <span className="material-symbols-outlined">menu_book</span>
//                     Resume Reading
//                   </button>
//                   <button className="border-2 border-outline-variant text-on-surface-variant px-6 py-3 rounded-xl font-bold hover:bg-surface-variant/20 transition-colors">
//                     Notes &amp; Reviews
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Reading Analytics */}
//           <div className="lg:col-span-4 flex flex-col gap-6">
//             <h2 className="font-headline-lg text-headline-lg text-on-surface">
//               Reading Habits
//             </h2>
//             <div className="bento-card h-full flex flex-col gap-6 bg-white border-outline-variant/10 premium-shadow">
//               <div className="flex justify-between items-center">
//                 <p className="font-bold">Pages per Week</p>
//                 <select className="bg-surface-container-low border-none rounded-lg text-label-md">
//                   <option>Last 7 Days</option>
//                   <option>Last 30 Days</option>
//                 </select>
//               </div>
              
//               {/* Simple Line Chart Representation */}
//               <div className="flex-1 flex items-end justify-between gap-2 min-h-[180px] pb-4 border-b border-outline-variant/20">
//                 {[12, 24, 42, 56, 18, 10, 35].map((pages, index) => (
//                   <div
//                     key={index}
//                     className={`w-full rounded-t-lg h-[${pages}%] hover:bg-primary-container/40 transition-colors cursor-pointer relative group ${index === 3 ? 'bg-primary' : 'bg-primary-container/20'}`}
//                   >
//                     <div className={`absolute -top-8 left-1/2 -translate-x-1/2 text-white text-xs px-2 py-1 rounded ${index === 3 ? 'bg-primary block' : 'bg-on-surface hidden group-hover:block'}`}>
//                       {pages}p
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="flex justify-between text-label-md text-on-surface-variant font-medium">
//                 {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
//                   <span key={index} className={index === 3 ? 'text-primary font-bold' : ''}>
//                     {day}
//                   </span>
//                 ))}
//               </div>
              
//               <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
//                 <div>
//                   <p className="text-label-md text-on-surface-variant">Avg. Daily</p>
//                   <p className="font-headline-md text-on-surface">28 min</p>
//                 </div>
//                 <div>
//                   <p className="text-label-md text-on-surface-variant">Best Time</p>
//                   <p className="font-headline-md text-on-surface">21:30</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Bookshelf & Friend Feed Section */}
//         <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
//           {/* Scrollable Bookshelf */}
//           <div className="lg:col-span-8 flex flex-col gap-6">
//             <div className="flex justify-between items-center">
//               <h2 className="font-headline-lg text-headline-lg text-on-surface">
//                 Want to Read
//               </h2>
//               <div className="flex gap-2">
//                 <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-colors">
//                   <span className="material-symbols-outlined">chevron_left</span>
//                 </button>
//                 <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-colors">
//                   <span className="material-symbols-outlined">chevron_right</span>
//                 </button>
//               </div>
//             </div>
            
//             <div className="flex gap-gutter overflow-x-auto pb-6 no-scrollbar">
//               {/* Book Item 1 */}
//               <div className="min-w-[200px] flex flex-col gap-3 group">
//                 <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     alt="Book cover"
//                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtZve-aWUIVgHUL7Q71MLez5k_iPsdjmvswI5DKGTUJlcqcpjr3vyDD6z4ct2kQQjamPC_ytiaSuRHFtJnK4GHNahKVZuoZeN19GMRKl9BUobo3KlugoHr6TpGnn3N9p0Vden-JBZUzTWLAzct8vUH_P1htn-rSDnS-Ayall7waky-P6QIjJsQD0MnK-8lwXkhUPbNwYj1FnmLlnGK81TmVigZByXn7WMz0EDx3jo4QdT0dnrDCb0"
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
//                     <button className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
//                       <span className="material-symbols-outlined">add</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="font-bold text-on-surface truncate">
//                     The Lion's Echo
//                   </p>
//                   <p className="text-label-md text-on-surface-variant">Biography</p>
//                 </div>
//               </div>
              
//               {/* Book Item 2 */}
//               <div className="min-w-[200px] flex flex-col gap-3 group">
//                 <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     alt="Book cover"
//                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOs4lZ9-JUxj2yuwQv4T__rviXTe2uWl05-l7Cy4I5VtYIidPoOT7GN1KAaS5KoS9poiJ1nY0eTE2zZBWv3TlYApdRUX-O9Zxy0HBP7j3nR6g-JGSZHCNs_TNGCyWylEzFRjtFEnqaHiPYeCW1Eymm7mbR2pMRpZAkonWrX_CSXKBLJ8A3i07P5isTSlBjyXlN8pOJWJpn29EjXv7ch5lD4AH1EOkR6XnnMlnKsjDt8JEiVn9VDVo"
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
//                     <button className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
//                       <span className="material-symbols-outlined">add</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="font-bold text-on-surface truncate">
//                     The Soul of Zimbabwe
//                   </p>
//                   <p className="text-label-md text-on-surface-variant">Fantasy</p>
//                 </div>
//               </div>
              
//               {/* Book Item 3 (Placeholder) */}
//               <div className="min-w-[200px] flex flex-col gap-3 group opacity-50">
//                 <div className="aspect-[2/3] rounded-xl bg-surface-container-high flex flex-col items-center justify-center border-2 border-dashed border-outline-variant">
//                   <span className="material-symbols-outlined text-outline-variant text-4xl mb-2">
//                     add_circle
//                   </span>
//                   <p className="text-label-md font-bold text-outline-variant">
//                     Add Book
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Friend Feed */}
//           <div className="lg:col-span-4 flex flex-col gap-6">
//             <h2 className="font-headline-lg text-headline-lg text-on-surface">
//               Circle Activity
//             </h2>
//             <div className="bento-card bg-surface-container-low border-none flex flex-col gap-6">
//               <div className="flex gap-4 items-start">
//                 <img
//                   className="w-12 h-12 rounded-full object-cover"
//                   alt="User avatar"
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHDwzQQLeLJfNdo6gn8kZpZheRDsLndnvm-Or0lGuPkS7_HAI49PuXbS7-yNs19N542eyJ9iB3Y_6OzISZmN57nlyYKroD0jmyqW3sT6YW-XNjXQ6QnmqZIPSNsdILeDxYZmEtkIoXqUjFo1I2f6FFinYiT65hPzAaWgUGbsQXXutDb7IaiYqVC70gp-cbkF9Kzok40_WqHIMTLG4D2rWqgvApx3P9Dai2e9jhmrGfCSQ3airJslo"
//                 />
//                 <div className="flex-1">
//                   <p className="text-body-md text-on-surface">
//                     <span className="font-bold">Abebe</span> just finished reading{' '}
//                     <span className="text-primary font-bold">
//                       The Harvest of Stars
//                     </span>
//                   </p>
//                   <div className="flex items-center gap-1 text-primary mt-1">
//                     {[...Array(4)].map((_, i) => (
//                       <span key={i} className="material-symbols-outlined text-sm" data-weight="fill">
//                         star
//                       </span>
//                     ))}
//                     <span className="material-symbols-outlined text-sm" data-weight="fill">
//                       star_half
//                     </span>
//                     <span className="text-label-md ml-2 text-on-surface-variant">
//                       2h ago
//                     </span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="flex gap-4 items-start border-t border-outline-variant/10 pt-4">
//                 <img
//                   className="w-12 h-12 rounded-full object-cover"
//                   alt="User avatar"
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqMD2wRnXAcsRQ1HEuu0a5xE1zA-g7OTz7t9Jr-G8b1Ddd7X9HhqK3-3i5AeEe3qaIG5pAEL3JNJb-FQoxNuWAgAfPy3P5aj8CVUuXv1v-elTaxA0Q9RkmkuKFyYjSrYEsCnxcRo6iOxdmKSgRnJHeXINcEunS3N-rllLWShGEHug_fWSI03mHDKn9tEp9rCfGDpJ7KRmcqjGp_k_yaL5kZHOaQI0sBGSYg935qhmcT77vSWmP6UI"
//                 />
//                 <div className="flex-1">
//                   <p className="text-body-md text-on-surface">
//                     <span className="font-bold">Kofi</span> shared a note in{' '}
//                     <span className="font-bold">Lagos Book Club</span>
//                   </p>
//                   <p className="text-body-md text-on-surface-variant mt-2 italic bg-white p-3 rounded-xl border border-outline-variant/10">
//                     "The character development in the third chapter is
//                     breathtaking..."
//                   </p>
//                   <p className="text-label-md text-on-surface-variant mt-2">5h ago</p>
//                 </div>
//               </div>
              
//               <button className="w-full text-primary font-bold text-label-md py-2 hover:bg-primary/5 rounded-lg transition-colors">
//                 See all activity
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Reading Heatmap Section */}
//         <section className="flex flex-col gap-6">
//           <h2 className="font-headline-lg text-headline-lg text-on-surface">
//             Consistency
//           </h2>
//           <div className="bento-card bg-white border-outline-variant/10 premium-shadow">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center gap-4">
//                 <p className="font-bold text-on-surface">324 Days streak this year</p>
//                 <div className="flex gap-2">
//                   <div className="flex items-center gap-1 text-label-md">
//                     <div className="w-3 h-3 rounded-sm bg-surface-container"></div>
//                     <span className="text-on-surface-variant">0 min</span>
//                   </div>
//                   <div className="flex items-center gap-1 text-label-md">
//                     <div className="w-3 h-3 rounded-sm bg-primary/30"></div>
//                     <span className="text-on-surface-variant">1-30 min</span>
//                   </div>
//                   <div className="flex items-center gap-1 text-label-md">
//                     <div className="w-3 h-3 rounded-sm bg-primary"></div>
//                     <span className="text-on-surface-variant">60+ min</span>
//                   </div>
//                 </div>
//               </div>
//               <p className="text-label-md text-on-surface-variant">
//                 September 2023 - Present
//               </p>
//             </div>
            
//             <div className="flex gap-1 overflow-x-auto pb-2 no-scrollbar">
//               <div className="grid grid-flow-col grid-rows-7 gap-1">
//                 {[...Array(364)].map((_, i) => {
//                   const intensity = Math.floor(Math.random() * 4);
//                   let color = 'bg-surface-container';
//                   if (intensity === 1) color = 'bg-primary/20';
//                   if (intensity === 2) color = 'bg-primary/50';
//                   if (intensity === 3) color = 'bg-primary';
                  
//                   return (
//                     <div
//                       key={i}
//                       className={`w-3 h-3 rounded-sm ${color} transition-colors hover:scale-125 hover:shadow-md cursor-help`}
//                       title={`Day ${i}: ${intensity * 20} mins read`}
//                     />
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-surface-container-highest dark:bg-surface-dim w-full mt-16 border-t border-outline-variant">
//         <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 w-full max-w-container-max mx-auto gap-8">
//           <div className="flex flex-col items-center md:items-start gap-4">
//             <div className="flex items-center gap-2">
//               <img
//                 alt="AfriReadCo Logo"
//                 className="h-8 w-auto"
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5TxtwpjdpuHy2g--A5RoIVy63e9kxDcM0bmawNUiUQCvAd8C3kz7nfLI9z5tJe0ysMGlxMrs-zBz3DpKHv45K3wppgWkOyTmzYcDq3SqYAZ3zBNwEAshhNI2D1CkPL3XDb6b6Nx-D_B7yQzC0uf-vPGmUEZ_IXN8NF9VJmiRf_mIFV523i7xGjyMqokaC6ywmVmA21quuxz7WgEADDxCJE4x8ahTlhyjp7MRRRyp8svKUcZnxJ0Y"
//               />
//               <span className="font-headline-md text-primary">AfriReadCo</span>
//             </div>
//             <p className="font-label-md text-on-surface-variant">
//               © 2024 AfriReadCo. Honoring the Modern Griot.
//             </p>
//           </div>
          
//           <div className="flex flex-wrap justify-center gap-8 font-label-md">
//             <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
//               Privacy Policy
//             </a>
//             <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
//               Terms of Service
//             </a>
//             <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
//               Authors
//             </a>
//             <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
//               Contact
//             </a>
//           </div>
          
//           <div className="flex gap-4">
//             <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:text-primary hover:border-primary transition-all">
//               <span className="material-symbols-outlined">share</span>
//             </button>
//             <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:text-primary hover:border-primary transition-all">
//               <span className="material-symbols-outlined">language</span>
//             </button>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Dashboard;


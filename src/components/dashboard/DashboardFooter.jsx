const DashboardFooter = () => {
  return (
    <footer className="bg-surface-container-highest dark:bg-surface-dim w-full mt-16 border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 w-full max-w-container-max mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="font-label-md text-on-surface-variant">© 2026 AfriReadCo. Honoring the Modern Griot.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-label-md">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Authors</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
        </div>
        <div className="flex gap-4"><button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:text-primary hover:border-primary transition-all"><span className="material-symbols-outlined">share</span></button><button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:text-primary hover:border-primary transition-all"><span className="material-symbols-outlined">language</span></button></div>
      </div>
    </footer>
  )
}

export default DashboardFooter

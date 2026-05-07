import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="brand-row">
          <div className="brand-mark">◈</div>
          <div className="brand-name">Game Store</div>
        </div>
        <div className="footer-grid">
          <div className="footer-links">
            <a className="footer-link" href="/privacy">Privacy</a>
            <a className="footer-link" href="/terms">Terms</a>
            <a className="footer-link" href="/contact">Contact</a>
          </div>

          <p className="footer-copy">© {new Date().getFullYear()} Game Store — Rodrigo Mella.</p>

          <div className="social-links" aria-label="Social links">
            <a className="social-icon" href="https://github.com/Rxdrig/game-store" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 .5C5.73.5.75 5.47.75 11.74c0 4.9 3.16 9.06 7.55 10.53.55.1.75-.24.75-.53v-1.86c-3.07.67-3.72-1.5-3.72-1.5-.5-1.28-1.22-1.62-1.22-1.62-.99-.67.08-.66.08-.66 1.1.08 1.68 1.12 1.68 1.12.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.7-1.45-2.45-.28-5.03-1.22-5.03-5.42 0-1.2.42-2.18 1.12-2.95-.12-.28-.49-1.4.1-2.92 0 0 .9-.29 2.95 1.12a10.1 10.1 0 012.68-.36c.9 0 1.82.12 2.68.36 2.05-1.41 2.95-1.12 2.95-1.12.6 1.52.22 2.64.1 2.92.7.77 1.12 1.75 1.12 2.95 0 4.2-2.6 5.13-5.08 5.4.39.34.72 1.02.72 2.06v3.05c0 .3.2.64.76.53 4.38-1.47 7.54-5.63 7.54-10.53C23.25 5.47 18.27.5 12 .5z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="brand-row">
          <div className="brand-mark">◈</div>
          <div className="brand-name">Neon Arcade</div>
        </div>
        <div className="footer-grid">
          <div className="footer-links">
            <a className="footer-link" href="/privacy">Privacy</a>
            <a className="footer-link" href="/terms">Terms</a>
            <a className="footer-link" href="/contact">Contact</a>
          </div>

          <p className="footer-copy">© {new Date().getFullYear()} Neon Arcade — All rights reserved.</p>

          <div className="social-links" aria-label="Social links">
            <a className="social-icon" href="https://twitter.com" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M22 5.92c-.63.28-1.3.48-2 .57.72-.43 1.27-1.1 1.53-1.9-.68.4-1.44.68-2.25.84A3.52 3.52 0 0015.5 4c-1.96 0-3.54 1.6-3.54 3.57 0 .28.03.55.09.81-2.95-.15-5.57-1.6-7.33-3.8-.3.52-.47 1.12-.47 1.76 0 1.22.62 2.3 1.58 2.93-.57-.02-1.11-.17-1.58-.43v.04c0 1.7 1.18 3.12 2.75 3.44-.29.08-.6.12-.92.12-.22 0-.43-.02-.64-.06.43 1.34 1.67 2.32 3.14 2.35A7.05 7.05 0 013 19.54 9.94 9.94 0 007.29 21c6.04 0 9.34-5 9.34-9.34v-.42c.64-.46 1.2-1.03 1.64-1.68-.58.26-1.2.44-1.86.52z" fill="currentColor"/>
              </svg>
            </a>
            <a className="social-icon" href="https://discord.com" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 4.6A19.9 19.9 0 0016.95 3c-.25.43-.6.98-.82 1.41-2.44-.36-4.8-.36-7.18 0-.22-.43-.56-.98-.82-1.41A19.84 19.84 0 004 4.6C2.06 8.16 2.18 11.58 2.5 14.2 5 15.73 7.44 16.5 10 16.95c.25-.34.5-.75.72-1.15-1.45-.43-2.85-1.1-4.1-1.95 1.02-.76 2.09-1.36 3.2-1.8 1.55.7 3.2 1.1 4.9 1.2.02-.12.04-.24.04-.36 0-3.4 2.72-6.16 6.08-6.16.86 0 1.68.2 2.4.54.62-.45 1.02-1.02 1.22-1.68A19.9 19.9 0 0020 4.6z" fill="currentColor"/>
              </svg>
            </a>
            <a className="social-icon" href="https://github.com" target="_blank" rel="noreferrer">
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

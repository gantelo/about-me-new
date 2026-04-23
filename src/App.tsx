export default function App() {
  return (
    <main className="stage">
      <div className="card">
        <a
          className="avatar"
          href="/"
          aria-label="Gabriel Antelo home"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <span aria-hidden="true">G</span>
        </a>

        <h1 style={{ "--i": 1 } as React.CSSProperties}>Gabriel Antelo</h1>

        <p className="bio" style={{ "--i": 2 } as React.CSSProperties}>
          Developer based in Buenos Aires. Building web and mobile apps.
        </p>

        <ul className="contact" style={{ "--i": 3 } as React.CSSProperties}>
          <li>
            <a href="mailto:gabriel1536@gmail.com">gabriel1536@gmail.com</a>
          </li>
          <li>
            <a href="tel:+543412293380">+54 341 229 3380</a>
          </li>
        </ul>

        <ul className="socials" style={{ "--i": 4 } as React.CSSProperties}>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-antelo-526710143/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gantelo"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.79 8.21 11.38.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="#" className="logo">FinTrack</a>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#features" className="nav-link">Features</a></li>
                        <li><a href="#" className="nav-link">How it Works</a></li>
                        <li><a href="#" className="nav-link">About</a></li>
                    </ul>
                </nav>
                <div className="header-cta">
                    <a href="#" className="btn-link">Log In</a>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>

            <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(10, 10, 12, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--color-border);
          padding: 1rem 0;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-text-main);
          letter-spacing: -0.02em;
        }

        .nav-list {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          font-weight: 500;
          color: var(--color-text-secondary);
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--color-text-main);
        }

        .header-cta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .btn-link {
          font-weight: 600;
          color: var(--color-text-main);
        }

        @media (max-width: 768px) {
          .nav {
            display: none;
          }
          
          .header-cta {
            display: none; /* Hide mostly for simplicity in this specific user req, or add hamburger later */
          }
        }
      `}</style>
        </header>
    );
};

export default Header;

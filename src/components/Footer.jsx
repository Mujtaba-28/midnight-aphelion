import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">Emerald Finance</h3>
            <p>Empowering you to reach your financial potential.</p>
            <div className="social-links">
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Github size={20} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Emerald Finance. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: var(--color-bg-main);
          padding: 5rem 0 2rem;
          border-top: 1px solid var(--color-border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          font-size: 1.5rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .footer-brand p {
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
          max-width: 300px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          color: var(--color-text-secondary);
          transition: color 0.2s;
        }

        .social-link:hover {
          color: var(--color-primary);
        }

        .footer-column h4 {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .footer-column ul {
          list-style: none;
        }

        .footer-column ul li {
          margin-bottom: 0.75rem;
        }

        .footer-column ul li a {
          color: var(--color-text-secondary);
          transition: color 0.2s;
        }

        .footer-column ul li a:hover {
          color: var(--color-primary);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer-brand p, .social-links {
            margin: 0 auto 1.5rem;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Your Finance, <br />
                        <span className="text-gradient"> reimagined.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Midnight Aphelion is the next-generation budget tracker that simplifies your financial life.
                        Track, analyze, and grow your wealth with a beautiful, intuitive interface.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">Start Tracking Free</button>
                        <button className="btn btn-secondary">View Demo</button>
                    </div>
                </div>

                <div className="hero-visual">
                    {/* Abstract visual representation */}
                    <div className="visual-circle circle-1"></div>
                    <div className="visual-circle circle-2"></div>
                    <div className="visual-card-mockup">
                        <div className="mockup-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="mockup-body">
                            <div className="graph-line"></div>
                            <div className="graph-bar"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .hero-section {
          padding: 8rem 0 6rem;
          background: radial-gradient(circle at top right, rgba(109, 40, 217, 0.1), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.05), transparent 40%);
          overflow: hidden;
          position: relative;
        }
        
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-secondary);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-secondary {
          background: transparent;
          color: var(--color-text-main);
          border: 1px solid var(--color-border);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--color-text-main);
        }

        /* Visuals */
        .hero-visual {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          z-index: 0;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          background: rgba(109, 40, 217, 0.2);
          top: -20px;
          right: -20px;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          background: rgba(16, 185, 129, 0.15);
          bottom: 0;
          left: 20px;
        }

        .visual-card-mockup {
          position: relative;
          z-index: 1;
          width: 320px;
          height: 220px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          padding: 1.5rem;
          transform: rotate(-5deg);
          transition: transform 0.3s ease;
        }

        .visual-card-mockup:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .mockup-header {
          display: flex;
          gap: 6px;
          margin-bottom: 2rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .red { background: #ef4444; }
        .yellow { background: #f59e0b; }
        .green { background: #10b981; }

        .mockup-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .graph-line {
          height: 4px;
          background: linear-gradient(90deg, var(--color-primary), transparent);
          width: 80%;
          border-radius: 2px;
        }
        
        .graph-bar {
           height: 4px;
           background: #27272a;
           width: 100%;
           border-radius: 2px;
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-subtitle {
            margin: 0 auto 2rem;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-visual {
            margin-top: 3rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;

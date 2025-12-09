import React from 'react';
import { UserPlus, Link, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: <UserPlus size={28} />,
        title: "1. Sign Up",
        description: "Create your free account in less than 30 seconds."
    },
    {
        icon: <Link size={28} />,
        title: "2. Connect Accounts",
        description: "Securely link your bank accounts and credit cards."
    },
    {
        icon: <TrendingUp size={28} />,
        title: "3. Track & Grow",
        description: "Watch your savings grow as you track expenses effortlessly."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="section how-it-works-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get started in <span className="text-gradient">minutes</span></h2>
                    <p className="section-subtitle">No complicated setup. Just three simple steps to financial freedom.</p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-icon-wrapper">
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .how-it-works-section {
          background-color: var(--color-bg-main);
          position: relative;
        }

        .steps-container {
          display: flex;
          justify-content: space-between;
          max-width: 900px;
          margin: 4rem auto 0;
          position: relative;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .step-icon-wrapper {
          width: 80px;
          height: 80px;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 0 0 8px var(--color-bg-main); /* Mask for connector */
        }

        .step-item:hover .step-icon-wrapper {
          color: var(--color-accent);
          border-color: var(--color-accent);
          transform: scale(1.1);
        }

        .step-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .step-description {
          color: var(--color-text-secondary);
          max-width: 250px;
          font-size: 0.95rem;
        }

        .step-connector {
          position: absolute;
          top: 40px;
          left: 50%;
          width: 100%;
          height: 2px;
          background: var(--color-border);
          z-index: -1;
        }

        @media (max-width: 768px) {
          .steps-container {
            flex-direction: column;
            gap: 3rem;
          }

          .step-connector {
            display: none;
          }
          
          .step-item {
            width: 100%;
          }
        }
      `}</style>
        </section>
    );
};

export default HowItWorks;

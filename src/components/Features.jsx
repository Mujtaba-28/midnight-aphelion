import React from 'react';
import { PieChart, CreditCard, Target, Shield, TrendingUp, Zap } from 'lucide-react';

const features = [
    {
        icon: <PieChart size={32} />,
        title: "Smart Budgeting",
        description: "Create custom budgets that automatically adjust based on your spending habits."
    },
    {
        icon: <CreditCard size={32} />,
        title: "Expense Tracking",
        description: "Sync your accounts and track every penny in real-time with automatic categorization."
    },
    {
        icon: <Target size={32} />,
        title: "Goal Setting",
        description: "Set financial goals and visualize your progress with intuitive milestones."
    },
    {
        icon: <Shield size={32} />,
        title: "Bank-Grade Security",
        description: "Your data is encrypted with 256-bit AES protection. We never sell your data."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Investment Insights",
        description: "Track your portfolio performance and get personalized investment recommendations."
    },
    {
        icon: <Zap size={32} />,
        title: "Instant Alerts",
        description: "Get notified immediately about unusual charges, bill due dates, and budget limits."
    }
];

const Features = () => {
    return (
        <section id="features" className="section features-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Everything you need to <span className="text-highlight">master your money</span></h2>
                    <p className="section-subtitle">Powerful features designed to give you complete control over your financial life.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .features-section {
          background-color: var(--color-bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .text-highlight {
          color: var(--color-accent);
        }

        .section-subtitle {
          color: var(--color-text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--color-border);
          padding: 2rem;
          border-radius: 16px;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--color-primary);
        }

        .feature-icon-wrapper {
          color: var(--color-primary);
          margin-bottom: 1.5rem;
          background: rgba(109, 40, 217, 0.1);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        .feature-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .feature-description {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
};

export default Features;

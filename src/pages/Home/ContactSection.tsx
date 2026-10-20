import React, { FormEvent, useState } from 'react';
import { Check, Copy, Mail, MapPin, Music2, Send } from 'lucide-react';
import Reveal from '../../components/home/Reveal';
import SectionHeading from '../../components/home/SectionHeading';

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText('bureauoffinance@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section section--sage">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Let's connect"
            title="Get in touch."
            description="We'd love to hear from you. Reach out with a question, an idea, or a hello."
          />
        </Reveal>
        <div className="contact-layout">
          <Reveal className="contact-form-card">
            {sent ? (
              <div className="form-success">
                <span className="icon-tile">
                  <Check size={20} />
                </span>
                <h3>Message received.</h3>
                <p>Thanks for reaching out. The BOF team will be in touch soon.</p>
                <button className="text-link" type="button" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Name
                    <input required name="name" type="text" placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input required name="email" type="email" placeholder="you@example.com" />
                  </label>
                </div>
                <label>
                  Message
                  <textarea required name="message" rows={4} placeholder="How can we help?" />
                </label>
                <button className="button button--primary" type="submit">
                  Send message <Send size={16} aria-hidden="true" />
                </button>
              </form>
            )}
          </Reveal>
          <Reveal className="contact-side" delay={0.1}>
            <button
              className="info-card info-card--button"
              type="button"
              onClick={copyEmail}
              aria-label="Copy BOF OAU email address"
            >
              <span className="icon-tile">
                <Mail size={19} aria-hidden="true" />
              </span>
              <span>
                <small>Email</small>
                <strong>bureauoffinance@gmail.com</strong>
              </span>
              {copied ? (
                <Check size={17} aria-label="Copied" />
              ) : (
                <Copy size={17} aria-hidden="true" />
              )}
            </button>
            <div className="info-card">
              <span className="icon-tile">
                <MapPin size={19} aria-hidden="true" />
              </span>
              <span>
                <small>Find us</small>
                <strong>Obafemi Awolowo University, Ile-Ife, Nigeria</strong>
              </span>
            </div>
            <a
              className="spotify-card"
              href="https://open.spotify.com/show/5YHUK9vFxslbFGtnfzql8I"
              target="_blank"
              rel="noreferrer"
            >
              <span className="spotify-card__mark">
                <Music2 size={24} aria-hidden="true" />
              </span>
              <span>
                <small>Listen on Spotify</small>
                <strong>Join BOF Market Pulse</strong>
                <em>Ideas, markets, and the stories behind them.</em>
              </span>
              <span className="spotify-card__arrow">↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

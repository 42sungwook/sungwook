import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-info">
          <h3>연락처 정보</h3>
          <div className="contact-items">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>silenc3@naver.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h4>Phone</h4>
                <p>+82 10-7713-5078</p>
              </div>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/42sungwook"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/%EC%84%B1%EC%9A%B1-%EA%B9%80-b00602296/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:silenc3@naver.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

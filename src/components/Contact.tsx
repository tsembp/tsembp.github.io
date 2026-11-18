import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { assetUrl } from '../utils/asset'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="section-label">contact</p>
          <h2 className="section-title">Let's connect</h2>
          <p>
            I'm open to graduate and internship roles in software engineering worldwide, especially in trading, fintech and payments, and happy to relocate. Interested in backend, distributed systems and infrastructure. Feel free to reach out about roles, interesting projects, or open-source collaboration.
          </p>
        </div>

        <div className="contact-links">
          <a className="contact-link" href="mailto:panagiotistsembekis45@gmail.com">
            <FaEnvelope aria-hidden="true" /> panagiotistsembekis45@gmail.com
          </a>
          <a className="contact-link" href="https://github.com/tsembp" target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/panagiotis-tsembekis/" target="_blank" rel="noreferrer">
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a className="btn btn-outline" href={assetUrl('assets/Panagiotis_Tsembekis_CV.pdf')} target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const Profile = () => {
  return (
    <section id="profile">
      <div className="hero-left">
        <p className="hero-greeting">hello, world</p>
        <h1 className="hero-name">
          Panagiotis<br />Tsembekis<span className="accent-dot">.</span>
        </h1>
        <ul className="hero-roles">
          <li className="hero-role">Incoming SWE @ Talos</li>
          <li className="hero-role">3rd Year CS Student @ UCY</li>
        </ul>
        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => window.open('/assets/Panagiotis_Tsembekis_CV_2025.pdf')}
          >
            Download CV
          </button>
          <button
            className="btn btn-outline"
            onClick={() => { location.href = '#contact'; }}
          >
            Get in Touch
          </button>
        </div>
        <div className="hero-socials">
          <a
            className="social-link"
            href="https://www.linkedin.com/in/panagiotis-tsembekis/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            className="social-link"
            href="https://github.com/tsembp/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img src="/assets/tech-stack-icons/github.png" alt="GitHub" />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-wrapper">
          <img src="/assets/profile-pic.JPEG" alt="Panagiotis Tsembekis" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
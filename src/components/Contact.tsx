const contactCards = [
  {
    icon: '/assets/linkedin.png',
    alt: 'LinkedIn',
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/panagiotis-tsembekis/',
    text: 'Connect with me ↗',
    external: true,
  },
  {
    icon: '/assets/email.png',
    alt: 'Email',
    label: 'email',
    href: 'mailto:panagiotistsembekis45@gmail.com',
    text: 'panagiotistsembekis45@gmail.com',
    external: false,
  },
  {
    icon: '/assets/tech-stack-icons/github.png',
    alt: 'GitHub',
    label: 'github',
    href: 'https://github.com/tsembp',
    text: 'View my work ↗',
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <p className="section-label">contact</p>
      <h2 className="section-title">Let's Connect</h2>

      <div className="contact-intro">
        <p>
          Feel free to reach out. I'm open to collaboration, interesting projects, and connecting with other developers.
        </p>
      </div>

      <div className="contact-cards">
        {contactCards.map(({ icon, alt, label, href, text, external }) => (
          <div className="contact-card" key={label}>
            <img src={icon} alt={alt} className="contact-card-icon" />
            <h4>{label}</h4>
            <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
              {text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
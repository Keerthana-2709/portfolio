import "./contact.css";


function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <span className="contact-tag">GET IN TOUCH</span>

          <h2>
            Let's Build <br />
            Something Great Together
          </h2>

          <div className="info-card">
            <h3>Er. KIRUBAHAR K S</h3>
            <p>Civil Engineer | Architect | Interior Designer</p>
          </div>

          <div className="contact-item">
            <a
              href="https://wa.me/919597866986?text=Hello%20Er.%20Kirubahar%20K%20S,%20I%20came%20across%20your%20Construction%20%26%20Interior%20Solutions%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project.%20Please%20contact%20me%20when%20convenient."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <span>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" />
                  <path d="M8.5 8.2c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.6 1 1.4 1.8 2.4 2.3.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .4-.2 1.1-.6 1.4-.5.5-1.2.7-2 .5-1-.2-2.4-.8-3.8-2.1-1.2-1.1-2-2.5-2.3-3.5-.3-.9 0-1.7.6-2.3Z" />
                </svg>
              </span>

              <p class="contact-number">+91 95978 66986</p>
            </a>
          </div>

          <div className="contact-item">
            <span>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <p>Tiruppur, Tamil Nadu, India</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-wrapper">
          <form
            className="contact-form"
            action="https://formsubmit.co/ksbuilders.contact@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Submission"
            />
            <input type="hidden" name="_template" value="table" />

            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                autoComplete="given-name"
                aria-label="First Name"
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                autoComplete="family-name"
                aria-label="Last Name"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              aria-label="Email Address"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              aria-label="Subject"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              aria-label="Write your message"
              required
            />

            <button type="submit">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "About | MotionVerseAI",
  description: "Learn how MotionVerseAI blends AI-driven creativity and cinematic production to create engaging videos for brands and creators.",
};

export default function AboutPage() {
  const values = [
    {
      icon: "fa-lightbulb",
      title: "Creativity First",
      description: "We push creative boundaries and think outside the box to deliver unique, memorable content.",
    },
    {
      icon: "fa-rocket",
      title: "Innovation",
      description: "Leveraging cutting-edge AI technology and industry best practices to stay ahead.",
    },
    {
      icon: "fa-heart",
      title: "Quality Obsessed",
      description: "Every frame, every transition, every detail is crafted with precision and care.",
    },
    {
      icon: "fa-handshake",
      title: "Client Focus",
      description: "Your success is our success. We're committed to exceeding expectations.",
    },
  ];

  const teamMembers = [
    {
      name: "MotionVerse Team",
      role: "Creative & Production",
      image: "/front/image/user2.png",
      description: "Dedicated professionals bringing stories to life with motion graphics and cinematic editing.",
    },
    {
      name: "AI Integration Specialists",
      role: "Technology & Innovation",
      image: "/front/image/user1.png",
      description: "Experts in leveraging AI-powered tools to enhance creativity and workflow efficiency.",
    },
    {
      name: "Client Success",
      role: "Support & Strategy",
      image: "/front/image/user3.png",
      description: "Always available to ensure your project goals are met with excellence.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="container" style={{ marginTop: "150px", marginBottom: "70px" }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6 animate-fade-up">
            <span className="text-red fw-bold text-uppercase tracking-wider small">About Us</span>
            <h1 className="main-title mt-2 mb-4">
              Crafting <span className="text-red">Cinematic Stories</span> with AI-Powered Excellence
            </h1>
            <p className="text-secondary mb-4 pb-2 lh-base">
              MotionVerseAI is a creative studio dedicated to transforming ideas into stunning motion graphics, cinematic videos, and engaging content that resonates with audiences worldwide.
            </p>
            <p className="text-secondary mb-5 pb-2 lh-base">
              We combine artistic excellence with cutting-edge technology to deliver videos that not only look incredible but also drive real business results.
            </p>
            <a href="/contact" className="btn btn-red btn-lg">
              <i className="fa-solid fa-arrow-right me-2"></i>Get Started Today
            </a>
          </div>

          <div className="col-lg-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="position-relative">
              <div
                style={{
                  background: "linear-gradient(135deg, #FF1744 0%, #FF5252 100%)",
                  borderRadius: "20px",
                  height: "400px",
                  opacity: 0.1,
                  position: "absolute",
                  top: "-20px",
                  left: "-20px",
                  right: 0,
                  bottom: 0,
                }}
              ></div>
              <img
                src="/front/image/ai-hero.svg"
                alt="AI design"
                className="img-fluid rounded-lg shadow-lg position-relative"
                style={{ maxHeight: "400px", width: "100%", objectFit: "cover", borderRadius: "20px"}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 animate-fade-up">
              <div className="mission-card p-5 h-100">
                <div className="mb-4">
                  <i className="fa-solid fa-bullseye text-red" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h3 className="text-white fw-bold mb-3">Our Mission</h3>
                <p className="text-secondary lh-base">
                  To empower creators and brands by delivering high-quality video production services that combine artistic creativity with AI-powered innovation, making professional content accessible and impactful for everyone.
                </p>
              </div>
            </div>
            <div className="col-lg-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="mission-card p-5 h-100">
                <div className="mb-4">
                  <i className="fa-solid fa-eye text-red" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h3 className="text-white fw-bold mb-3">Our Vision</h3>
                <p className="text-secondary lh-base">
                  To be the go-to partner for motion graphics and video editing, recognized for transforming ordinary footage into extraordinary stories that inspire, engage, and drive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5 headingText">
            <div className="section-divider">Our <span>Values</span></div>
          </div>
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-lg-3 col-md-6 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-card p-4 h-100">
                  <div className="mb-3 text-red">
                    <i className={`fa-solid ${value.icon}`} style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="fw-bold text-white mb-3">{value.title}</h5>
                  <p className="text-muted small lh-base">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5 headingText">
            <div className="section-divider">Meet Our <span>Team</span></div>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="team-card">
                  <div className="team-image-wrapper mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid rounded-lg"
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                    />
                    <div className="team-overlay">
                      <a href="https://wa.me/919024377055" target="_blank" rel="noreferrer" className="btn btn-sm btn-red">
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                  <h5 className="fw-bold text-white mb-1">{member.name}</h5>
                  <p className="text-red small fw-bold mb-3">{member.role}</p>
                  <p className="text-muted small lh-base">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-3 col-6 animate-fade-up">
              <div className="stat-card">
                <h3 className="text-red fw-bold mb-2" style={{ fontSize: "2.5rem" }}>50+</h3>
                <p className="text-muted small">Projects Delivered</p>
              </div>
            </div>
            <div className="col-md-3 col-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="stat-card">
                <h3 className="text-red fw-bold mb-2" style={{ fontSize: "2.5rem" }}>500+</h3>
                <p className="text-muted small">Hours of Content Created</p>
              </div>
            </div>
            <div className="col-md-3 col-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="stat-card">
                <h3 className="text-red fw-bold mb-2" style={{ fontSize: "2.5rem" }}>10+</h3>
                <p className="text-muted small">Happy Clients</p>
              </div>
            </div>
            <div className="col-md-3 col-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="stat-card">
                <h3 className="text-red fw-bold mb-2" style={{ fontSize: "2.5rem" }}>5K+</h3>
                <p className="text-muted small">Total Views Generated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="cta-premium-box d-flex flex-column flex-md-row justify-content-around align-items-center gap-4">
            <div className="cta-bg-camera"></div>
            <div className="position-relative" style={{ zIndex: 2 }}>
              <h2 className="fw-bold mb-2 text-white" style={{ fontSize: "2.3rem", lineHeight: "1.2" }}>
                Ready to Create <br />
                <span className="text-red">Amazing Content?</span>
              </h2>
              <p className="text-muted small mb-0">Let's transform your vision into reality with motion, creativity, and AI innovation.</p>
            </div>
            <div className="position-relative d-flex flex-column align-items-center align-items-md-end gap-2" style={{ zIndex: 2 }}>
              <a href="https://wa.me/919024377055" target="_blank" rel="noreferrer" className="btn btn-red px-4 py-3 fw-bold">
                Get Started <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "11px" }}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";

const plans = [
  {
    title: "Starter AI Package",
    subtitle: "Ideal for social creators and first-time brands",
    price: "$30",
    duration: "per video",
    features: [
      "AI-driven video editing",
      "Short-form social clips",
      "1 revision",
      "Basic motion graphics",
      "2 day delivery",
    ],
    action: "Choose Starter",
    featured: false,
  },
  {
    title: "Growth AI Package",
    subtitle: "Best for growing brands and product launches",
    price: "$50",
    duration: "per video",
    features: [
      "Smart motion design",
      "AI-enhanced storytelling",
      "2 revisions",
      "Trend-optimized content",
      "3 day delivery",
    ],
    action: "Choose Growth",
    featured: true,
  },
  {
    title: "Premium AI Package",
    subtitle: "For high-impact campaigns and cinematic storytelling",
    price: "$100",
    duration: "per video",
    features: [
      "Advanced AI visual effects",
      "Unlimited revisions",
      "Premium motion and pacing",
      "Custom brand narrative",
      "5 day delivery",
    ],
    action: "Choose Premium",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />

      <section className="container" style={{ marginTop: "150px", marginBottom: "70px" }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6 animate-fade-up">
            <span className="text-red fw-bold text-uppercase tracking-wider small">Pricing Plans</span>
            <h1 className="main-title mt-2 mb-4">
              AI-Powered Pricing for Smart Video Production
            </h1>
            <p className="text-secondary mb-4 lh-base">
              Choose the plan that best fits your brand goals. Our packages combine artificial intelligence, motion design, and storytelling to deliver premium videos quickly and affordably.
            </p>
            <p className="text-secondary mb-4 lh-base">
              Whether you're launching a new product, building social buzz, or scaling content output, MotionVerseAI has the right package for your needs.
            </p>
            <a href="/contact" className="btn btn-red btn-lg">
              <i className="fa-solid fa-arrow-right me-2"></i>Talk to Pricing Expert
            </a>
          </div>

          <div className="col-lg-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="pricing-hero-card p-5 rounded-4 position-relative bg-dark border border-secondary">
              <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" style={{ background: "radial-gradient(circle at top left, rgba(247,23,68,0.18), transparent 35%)" }}></div>
              <div className="position-relative">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="small text-muted mb-1">Featured Plan</p>
                    <h4 className="text-white fw-bold">Growth AI Package</h4>
                  </div>
                  <div className="badge bg-red text-white py-2 px-3 rounded-pill">Best Value</div>
                </div>
                <h2 className="text-red fw-bold mb-3">$50</h2>
                <p className="text-secondary mb-4">AI-first video package built for higher engagement and conversion.</p>
                <ul className="list-unstyled text-secondary lh-lg mb-4">
                  <li>• Smart visual editing</li>
                  <li>• AI-assisted motion graphics</li>
                  <li>• Trend-led story structure</li>
                </ul>
                <a href="https://wa.me/919024377055" target="_blank" rel="noreferrer" className="btn btn-green btn-lg">
                  Book Growth Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5 headingText">
            <div className="section-divider">Choose the <span>Right Plan</span></div>
          </div>
          <div className="row g-4">
            {plans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`pricing-card p-5 h-100 ${plan.featured ? "pricing-featured" : ""}`}>
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <div className="pricing-badge mb-3">{plan.featured ? "Most Popular" : plan.title}</div>
                      {!plan.featured && <h4 className="text-white fw-bold">{plan.title}</h4>}
                    </div>
                    {plan.featured && <span className="text-red fw-bold small">Featured</span>}
                  </div>
                  <p className="text-muted mb-4">{plan.subtitle}</p>
                  <div className="plan-price mb-4">
                    <span className="price">{plan.price}</span>
                    <span className="price-period">/{plan.duration}</span>
                  </div>
                  <ul className="plan-features list-unstyled text-muted small mb-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <a href="https://wa.me/919024377055" target="_blank" rel="noreferrer" className="btn btn-red w-100">
                    {plan.action}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <div className="headingText mb-4">
            Not sure which plan fits best?
          </div>
          <p className="text-secondary mb-4">
            Send us your project details and we’ll recommend the best AI pricing package to match your goals, audience, and budget.
          </p>
          <a href="/contact" className="btn btn-green btn-lg">
            Get a Custom Quote
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

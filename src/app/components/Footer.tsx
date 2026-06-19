export default function Footer() {
  return (
  <footer className="py-5 text-secondary">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-md-6">
          <a className="navbar-brand fw-bold fs-3 text-white d-block mb-3" href="#">MotionVerse<span
              className="text-red">AI</span></a>
          <p className="small text-muted col-10 lh-base">Helping creators and brands grow with cinematic videos that capture attention and drive engagement.</p>
          <div className="d-flex gap-2 mt-3">
            <a href="https://www.instagram.com/motionverseai26" target="_blank" className="footer-social-icon"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/@motionverseai-g6h-z9q" target="_blank" className="footer-social-icon"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/motionverse-ai-a88a84412" target="_blank" className="footer-social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 col-6">
          <h6 className="text-white small fw-bold mb-3 tracking-wider">SERVICES</h6>
          <ul className="list-unstyled d-flex flex-column gap-2 small">
            <li><a href="#services">Brand Videos</a></li>
            <li><a href="#services">Corporate Videos</a></li>
            <li><a href="#services">Explainer Videos</a></li>
            <li><a href="#services">Content Automation</a></li>
            <li><a href="#services">Short Form Content</a></li>
            <li><a href="#services">Product Promo Videos</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-6 col-6">
          <h6 className="text-white small fw-bold mb-3 tracking-wider">QUICK LINK</h6>
          <ul className="list-unstyled d-flex flex-column gap-2 small">
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-6 col-6">
          <h6 className="text-white small fw-bold mb-3 tracking-wider">PAGES</h6>
          <ul className="list-unstyled d-flex flex-column gap-2 small">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6">
          <h6 className="text-white small fw-bold mb-3 tracking-wider">GET IN TOUCH</h6>
          <p className="small text-muted mb-3"><i className="fa-solid fa-phone"></i> +91 9024377055</p>
          <p className="small text-muted mb-3"><i className="fa-solid fa-envelope"></i> support@motionverseai.com</p>
          <p className="small text-muted mb-3"><i className="fa-solid fa-map-marker"></i> 81, Krishna Vihar, Jaipur</p>
        </div>
      </div>

      <hr className="my-4 border-secondary border-opacity-10" />

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted">
        <p className="mb-0">&copy; 2026 MotionVerseAI. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  );
}

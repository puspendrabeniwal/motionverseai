'use client';

import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
  <footer className="py-5 text-secondary">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-md-6">
          <Link className="navbar-brand fw-bold fs-3 text-white d-block mb-3" href="/">
            MotionVerse<span className="text-red">AI</span>
          </Link>
          <p className="small text-muted lh-base">Helping creators and brands grow with cinematic videos that capture attention and drive engagement.</p>
          <div className="d-flex gap-2 mt-3">
            <Link href="https://www.instagram.com/motionverseai26" target="_blank" className="footer-social-icon">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link href="https://www.youtube.com/@motionverseai-g6h-z9q" target="_blank" className="footer-social-icon">
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/motionverse-ai-a88a84412" target="_blank" className="footer-social-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <h6 className="text-white small fw-bold mb-3 tracking-wider">QUICK LINK</h6>
          <ul className="list-unstyled d-flex flex-column gap-2 small">
            <li><Link href="/portfolio" className={isActive('/portfolio') ? 'footer-link-active' : ''}>Portfolio</Link></li>
            <li><Link href="/pricing" className={isActive('/pricing') ? 'footer-link-active' : ''}>Pricing</Link></li>
            <li><Link href="/about" className={isActive('/about') ? 'footer-link-active' : ''}>About Us</Link></li>
            <li><Link href="/contact" className={isActive('/contact') ? 'footer-link-active' : ''}>Contact Us</Link></li>
            <li><Link href="/faq" className={isActive('/faq') ? 'footer-link-active' : ''}>FAQs</Link></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6">
          <h6 className="text-white small fw-bold mb-3 tracking-wider">PAGES</h6>
          <ul className="list-unstyled d-flex flex-column gap-2 small">
            <li><Link href="/terms" className={isActive('/terms') ? 'footer-link-active' : ''}>Terms & Conditions</Link></li>
            <li><Link href="/privacy" className={isActive('/privacy') ? 'footer-link-active' : ''}>Privacy Policy</Link></li>
            <li><Link href="/refund" className={isActive('/refund') ? 'footer-link-active' : ''}>Refund Policy</Link></li>
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

'use client';

import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top py-3">
        <div className="container">
            <Link className="navbar-brand fw-bold fs-3" href="/">
                MotionVerse<span className="text-red">AI</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
                    {navLinks.map((link) => (
                      <li key={link.href} className="nav-item">
                        <Link 
                          className={`nav-link ${isActive(link.href) ? 'active' : ''}`} 
                          href={link.href}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                </ul>
                <Link href="https://wa.me/919024377055" target="_blank" rel="noreferrer noopener" className="btn btn-red">
                  Let's Talk 
                  <i className="fa-solid fa-arrow-up-right-from-square" style={{fontSize: '11px'}}></i>
                </Link>
            </div>
        </div>
    </nav>
  );
}

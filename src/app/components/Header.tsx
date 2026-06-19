export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
        <div className="container">
            <a className="navbar-brand fw-bold fs-3" href="#">MotionVerse<span className="text-red">AI</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Services 
                            <i className="fa-solid fa-chevron-down ms-1" style={{fontSize:'10px'}}></i>
                        </a>
                    </li> */}
                </ul>
                <a href="#" className="btn btn-red">Let's Talk 
                    <i className="fa-solid fa-arrow-up-right-from-square" style={{fontSize: '11px'}}></i>
                </a>
            </div>
        </div>
    </nav>
  );
}

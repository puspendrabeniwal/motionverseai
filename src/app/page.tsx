import Header from "./components/Header";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <section className="container" style={{ marginTop: '150px', marginBottom: '70px' }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <span className="text-red fw-bold text-uppercase tracking-wider small">Motionverseai</span>
            <h1 className="main-title mt-2 mb-4">Transform Your<br /><span className="text-red">Vision into Motion</span><br />Where Creativity Meets AI</h1>
            <p className="text-secondary mb-4 pb-2 lh-base">MotionVerseAI – Where every project is uniquely designed to match your brand, message, and audience.</p>

            <div className="d-flex gap-3 align-items-center mb-4 pb-2">
              <a href="#" className="btn btn-red">Get Started <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i></a>
              <a href="#services" className="btn btn-outline-custom"><i className="fa-solid fa-circle-play text-red"></i>Our Services</a>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div className="d-flex">
                <img src="/front/image/user2.png?w=100"
                  className="rounded-circle border border-dark"
                  style={{ width: '38px', height: '38px', objectFit: 'cover', marginRight: '-10px' }} />
                <img src="/front/image/user5.png?w=100"
                  className="rounded-circle border border-dark"
                  style={{ width: '38px', height: '38px', objectFit: 'cover', marginRight: '-10px' }} />
                <img src="/front/image/user1.png?w=100"
                  className="rounded-circle border border-dark" style={{ width: '38px', height: '38px', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="fw-bold text-white small">10+ Clients & Brands</div>
                <div className="text-muted small" style={{ fontSize: '12px' }}>Trust Our Services</div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-6 mb-3">
                    <div className="video-box" style={{ height: '100px' }}>
                      <video muted playsInline>
                        <source src="/front/videos/pand-pain.mp4" type="video/mp4" />
                      </video>
                      <div className="video-overlay-play"><i className="fa-solid fa-play"></i></div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="video-box" style={{ height: '100px' }}>
                      <video muted playsInline>
                        <source src="/front/videos/pand-pain.mp4" type="video/mp4" />
                      </video>
                      <div className="video-overlay-play"><i className="fa-solid fa-play"></i></div>
                    </div>
                  </div>

                  <div className="col-12 mb-3">
                    <div className="video-box" style={{ height: '200px' }}>
                      <video autoPlay muted playsInline>
                        <source src="/front/videos/what-we-do.mp4" type="video/mp4" />
                      </video>
                      <div className="video-overlay-play" style={{ width: '46px', height: '46px' }}><i className="fa-solid fa-play fs-6"></i></div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="video-box" style={{ height: '100px' }}>
                      <video muted playsInline>
                        <source src="/front/videos/first-one.mp4" type="video/mp4" />
                      </video>
                      <div className="video-overlay-play"><i className="fa-solid fa-play"></i></div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="video-box" style={{ height: '100px' }}>
                      <video autoPlay muted playsInline>
                        <source src="/front/videos/her_football_kick.mp4" type="video/mp4" />
                      </video>
                      <div className="video-overlay-play"><i className="fa-solid fa-play"></i></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="video-box" style={{ height: '316px' }}>
                      <video muted playsInline>
                        <source src="/front/videos/facewash-ads.mp4" type="video/mp4" />
                      </video>
                      <div className="video-overlay-play"><i className="fa-solid fa-play"></i></div>
                      <span className="badge bg-orange position-absolute bottom-0 end-0 m-2 text-white fw-bold" style={{ fontSize: '10px;' }}>4K ULTRA HD</span>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="video-box" style={{ height: '100px' }}>
                      <video autoPlay muted playsInline>
                        <source src="/front/videos/shadi-special.mp4" type="video/mp4" />
                      </video>
                      <div className="video-overlay-play"><i className="fa-solid fa-play"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-3 border-top border-bottom border-secondary">
          <div className="container">
              <div className="row justify-content-center align-items-center g-4 text-center brand-logos">
                  <div className="col-4 col-md">TechYukt</div>
              </div>
          </div>
        </section> */}

      <section className="py-3 text-center counterSections">
        <div className="container py-3">
          <div className="row g-4">
            <div className="col-md-3 col-6">
              <div className="counterText">50+</div>
              <div className="text-muted small text-uppercase tracking-wider">Videos Edited</div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counterText">500+</div>
              <div className="text-muted small text-uppercase tracking-wider">Hours Edited</div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counterText">10+</div>
              <div className="text-muted small text-uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counterText">5000+</div>
              <div className="text-muted small text-uppercase tracking-wider">Views Generated</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container">
          <div className="text-center mb-3 headingText">
            <div className="section-divider">Cinematic  <span>Creations</span></div>
          </div>
          <p className="text-muted text-center small mb-4">Turning ideas into immersive visual stories that engage audiences and elevate brands.</p>
          <div className="row">
            <div className="col-lg-7">
              <div className="work-card p-4 d-flex flex-column align-items-end justify-content-end">
                <video className="video-bg">
                  <source src="/front/videos/final-wildlife.mp4" type="video/mp4" />
                </video>
                <div className="dark-gradient-overlay"></div>

                <div className="work-card-content d-flex flex-column h-100 justify-content-end">
                  <div><span className="badge bg-black text-white px-3 py-2 opacity-75 fw-bold"
                    style={{ fontSize: '11px', letterSpacing: '1px' }}>PLAY <i className="fa-solid fa-play ms-1 text-red"
                      style={{ fontSize: '9px' }}></i></span>
                  </div>
                  <div className="mt-5 pt-5">
                    <h2 className="fw-bold text-white mb-3" style={{ fontSize: '1.9rem', lineHeight: '1.2' }}>Brand  Promotion<br /><span className="text-red"> Through Cinematic Storytelling</span></h2>
                    <div className="row g-3 mt-1 text-start">
                      <div className="col-6 col-md-3">
                        <h6 className="mb-1 text-white small fw-bold">Creative Storytelling</h6>
                        <p className="text-muted mb-0" style={{ fontSize: '11px', lineHeight: 1.3 }}>We create
                          stories that connect and inspire.</p>
                      </div>
                      <div className="col-6 col-md-3">
                        <h6 className="mb-1 text-white small fw-bold">High Quality</h6>
                        <p className="text-muted mb-0" style={{ fontSize: '11px', lineHeight: 1.3 }}>Top-notch
                          editing with premium quality.</p>
                      </div>
                      <div className="col-6 col-md-3">
                        <h6 className="mb-1 text-white small fw-bold">Fast Delivery</h6>
                        <p className="text-muted mb-0" style={{ fontSize: '11px', lineHeight: 1.3 }}>Quick
                          turnaround without compromising.</p>
                      </div>
                      <div className="col-6 col-md-3">
                        <h6 className="mb-1 text-white small fw-bold">Unlimited Revisions</h6>
                        <p className="text-muted mb-0" style={{ fontSize: '11px', lineHeight: 1.3 }}>We work
                          until you're 100% satisfied.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-flex flex-column">
              <div className="row">
                <div className="col-6 mb-3">
                  <div className="video-box" style={{ height: '316px' }}>
                    <video muted playsInline>
                      <source src="/front/videos/facewash-ads.mp4" type="video/mp4" />
                    </video>
                    <div className="video-overlay-play"><i className="fa-solid fa-play"></i></div>
                    <span className="badge bg-orange position-absolute bottom-0 end-0 m-2 text-white fw-bold"
                      style={{ fontSize: '10px' }}>4K ULTRA HD</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="video-box" style={{ height: '316px' }}>
                    <video muted playsInline>
                      <source src="/front/videos/facewash-ads.mp4" type="video/mp4" />
                    </video>
                    <div className="video-overlay-play"><i className="fa-solid fa-play"></i></div>
                    <span className="badge bg-orange position-absolute bottom-0 end-0 m-2 text-white fw-bold"
                      style={{ fontSize: '10px' }}>4K ULTRA HD</span>
                  </div>
                </div>
              </div>
              <div className="whatsapp-premium-box d-flex flex-column flex-md-row justify-content-around align-items-center gap-4">
                <div className="whatsapp-bg-camera"></div>
                <div className="position-relative" style={{ zIndex: 2 }}>
                  <h2 className="fw-bold mb-2 text-white" style={{ fontSize: '2.3rem', lineHeight: 1.2 }}>Let’s <span className="text-red">Connect</span></h2>
                  <p className="text-muted small mb-0">Turn Your Vision Into Reality</p>
                </div>
                <div className="position-relative d-flex flex-column align-items-center align-items-md-end gap-2" style={{ zIndex: 2 }}>
                  <a href="https://wa.me/919024377055" target="_blank" className="btn btn-green px-4 py-3 fw-bold">WhatsApp <i className="fa-solid fa-arrow-up-right-from-square"
                    style={{ fontSize: '11px' }}></i></a>

                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="py-5 text-center">
        <div className="container py-3">
          <div className="text-center mb-3 headingText">
            <div className="section-divider">Why <span> Choose</span> Us</div>
          </div>
          <p className="text-muted text-center small mb-4">MotionverseAi where every video is designed to capture attention, deliver emotion, and leave a lasting impact.</p>
          <div className="row g-4 text-start">

            <div className="col-md-4 col-6">
              <div className="whyChooseCard">
                <div className="mb-3 text-red">
                  <i className="fa-solid fa-bolt fs-3"></i>
                </div>
                <h6 className="fw-bold text-white mb-2">Reach Growth</h6>
                <p className="text-muted small lh-sm">
                  Our videos helped creators attract more views, engagement, and audience attention across social platforms.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-6">
              <div className="whyChooseCard">

                <div className="mb-3 text-red">
                  <i className="fa-regular fa-clock fs-3"></i>
                </div>
                <h6 className="fw-bold text-white mb-2">Higher Audience Retention</h6>
                <p className="text-muted small lh-sm">
                  Cinematic editing and storytelling that keeps viewers watching till the end.
                </p>
              </div>

            </div>

            <div className="col-md-4 col-6">
              <div className="whyChooseCard">

                <div className="mb-3 text-red">
                  <i className="fa-solid fa-shield-halved fs-3"></i>
                </div>
                <h6 className="fw-bold text-white mb-2">Fast & Premium Delivery</h6>
                <p className="text-muted small lh-sm">
                  Professional-quality videos delivered quickly without compromising creativity.
                </p>
              </div>

            </div>

            <div className="col-md-4 col-6">
              <div className="whyChooseCard">

                <div className="mb-3 text-red">
                  <i className="fa-solid fa-award fs-3"></i>
                </div>
                <h6 className="fw-bold text-white mb-2">Built for Brands & Creators</h6>
                <p className="text-muted small lh-sm">
                  Modern visuals, viral-style edits, and content strategies designed for today’s digital audience.
                </p>
              </div>

            </div>

            <div className="col-md-4 col-6">
              <div className="whyChooseCard">

                <div className="mb-3 text-red">
                  <i className="fa-solid fa-users-gear fs-3"></i>
                </div>
                <h6 className="fw-bold text-white mb-2">Deliver Messages More Effectively</h6>
                <p className="text-muted small lh-sm">
                  Complex ideas become simple, clear, and impactful through motion graphics, visuals, and storytelling.
                </p>
              </div>
            </div>


            <div className="col-md-4 col-6">
              <div className="whyChooseCard">

                <div className="mb-3 text-red">
                  <i className="fa-solid fa-headset fs-3"></i>
                </div>
                <h6 className="fw-bold text-white mb-2">Build Trust & Personal Connection</h6>
                <p className="text-muted small lh-sm">
                  Videos allow creators to express personality, emotions, authenticity & creating stronger audience relationships.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="services">
        <div className="pt-3">
          <div className="text-center headingText">
            <div className="section-divider">Our <span>Services</span></div>
          </div>
          <p className="text-muted text-center small mb-4">We combine creativity, strategy, and AI-powered innovation to deliver impactful video solutions<br /> that help brands grow, engage audiences, and stand out in the digital world.</p>

          <div className="container text-center">


            <div className="video-tabs">
              <button className="btn tab-btn btn-red m-1 active" data-target="all">All Videos</button>
              <button className="btn tab-btn btn-red m-1" data-target="educational">#Educational</button>
              <button className="btn tab-btn btn-red m-1" data-target="brands">#Product Promo</button>
              <button className="btn tab-btn btn-red m-1" data-target="events">#Short Form Content</button>
            </div>


            <div className="tab-content-box pt-3" id="all">
              <div className="row row-cols-2 row-cols-md-4 g-3">
                <div className="col">
                  <div className="service-video-card">
                    <video>
                      <source src="/front/videos/science-everywhere.mp4" type="video/mp4" />
                    </video>

                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Science is everywhere</div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-video-card">
                    <video>
                      <source src="/front/videos/mobile-ads.mp4" type="video/mp4" />
                    </video>
                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Brand Promotion</div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-video-card">
                    <video>
                      <source src="/front/videos/facewash-ads.mp4" type="video/mp4" />
                    </video>
                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Advertising Video Editing</div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-video-card">
                    <video>
                      <source src="/front/videos/funny.mp4" type="video/mp4" />
                    </video>
                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Events Editing</div>
                  </div>
                </div>

                <div className="col">
                  <div className="service-video-card">
                    <video>
                      <source src="/front/videos/digestion-system.mp4" type="video/mp4" />
                    </video>
                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Digestion System</div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-video-card">
                    <video>
                      <source src="/front/videos/Rajasthani-icecream.mp4" type="video/mp4" />
                    </video>
                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Lovely Sweet</div>
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-content-box pt-3 d-none" id="educational">
              <div className="row row-cols-2 row-cols-md-4 g-3">
                <div className="col">
                  <div className="service-video-card">
                    <video muted playsInline>
                      <source src="/front/videos/digestion-system.mp4" type="video/mp4" />
                    </video>
                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Digestion System</div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-video-card">
                    <video>
                      <source src="/front/videos/science-everywhere.mp4" type="video/mp4" />
                    </video>
                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Science is everywhere</div>
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-content-box pt-3 d-none" id="brands">
              <div className="row row-cols-2 row-cols-md-4 g-3">
                <div className="col">
                  <div className="service-video-card">
                    <video>
                      <source src="/front/videos/mobile-ads.mp4" type="video/mp4" />
                    </video>
                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Brand Promotion</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-content-box pt-3 d-none" id="events">
              <div className="row row-cols-2 row-cols-md-4 g-3">
                <div className="col">
                  <div className="service-video-card">
                    <video>
                      <source src="/front/videos/funny.mp4" type="video/mp4" />
                    </video>
                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Events Editing</div>
                  </div>
                </div>
                <div className="col">
                  <div className="service-video-card">
                    <video>
                      <source src="/front/videos/Rajasthani-icecream.mp4" type="video/mp4" />
                    </video>
                    <div className="service-video-overlay"></div>
                    <div className="service-video-title text-white">Lovely Sweet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="text-center mb-3 headingText">
              <div className="section-divider">Clients<span>Love Us</span></div>
            </div>
            <p className="text-muted small mt-2">We combine cinematic storytelling with AI technology to create impactful videos that drive real results.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4 d-flex flex-column gap-4">
              <div className="testimonial-card">
                <div className="mb-3"><i className="fa-solid fa-quote-left testimonial-quote-icon"></i></div>
                <p className="small text-secondary lh-base">"MotionVerseAI's attention to detail is unmatched. They take our raw footage and transform it into stories we are proud to share."</p>
                <div className="d-flex align-items-center gap-2 mt-4">
                  <img src="/front/image/user.jpeg?w=100" className="avatar" />
                  <div>
                    <h6 className="mb-0 small fw-bold">Harman Kameriya</h6>
                    <span style={{ fontSize: '11px' }} className="text-muted">Creative Director</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="row">
                  <div className="col-md-5">
                    <div className="d-flex align-items-center gap-2 mt-2">
                      <img src="/front/image/user3.png?w=100" className="avatar2" />
                      <div></div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="mb-2"><i className="fa-solid fa-quote-left testimonial-quote-icon"></i></div>
                    <p className="small text-secondary lh-base">"The team completely transformed our content. We saw a 3.5X increase in watch time for our videos."</p>
                    <h6 className="mb-0 small fw-bold">S Smithi</h6>
                    <span style={{ fontSize: '11px' }} className="text-muted">YouTuber & Influencer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex flex-column gap-4">
              <div className="testimonial-card">
                <div className="mb-3"><i className="fa-solid fa-quote-left testimonial-quote-icon"></i></div>
                <p className="small text-secondary lh-base">"The turnaround was incredible, but quality never took a
                  back seat. MotionVerseAI is our go-to post-production team."</p>
                <div className="d-flex align-items-center gap-2 mt-4">
                  <img src="/front/image/user1.png?w=100" className="avatar" />
                  <div>
                    <h6 className="mb-0 small fw-bold">Punit Khandelwal</h6><span style={{ fontSize: '11px' }}
                      className="text-muted">CEO, TechYukt Pvt. Ltd.</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="mb-3"><i className="fa-solid fa-quote-left testimonial-quote-icon"></i></div>
                <p className="small text-secondary lh-base">"Our YouTube channel went from average to awesome after
                  working with MotionVerseAI. Fantastic editors who really care about details."</p>
                <div className="d-flex align-items-center gap-2 mt-4">
                  <img src="/front/image/user2.png?w=100" className="avatar" />
                  <div>
                    <h6 className="mb-0 small fw-bold">Shivraj Thakur</h6><span style={{ fontSize: '11px' }} className="text-muted">Founder
                      of Tech Guide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card d-flex flex-column justify-content-between h-100"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(18,18,20,0.98) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.1) 100%), url('/front/image/user5.png?w=500')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div></div>
                <div className="mt-5 pt-5">
                  <div className="mb-3"><i className="fa-solid fa-quote-left testimonial-quote-icon"></i></div>
                  <p className="small text-white lh-base">"I've worked with numerous editors, but MotionVerseAi's
                    creativity and storytelling elevated my brand to a whole new level."</p>
                  <div className="d-flex align-items-center gap-2 mt-4">
                    <div>
                      <h6 className="mb-0 small fw-bold text-white">Maheshwari L.</h6>
                      <span style={{ fontSize: '11px' }} className="fw-medium">Lifestyle Creator</span>
                      <div className="text-red fw-bold mt-1" style={{ fontSize: '10px' }}><i className="fa-solid fa-eye text-red me-1"></i>
                        2.6M Views Generated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="cta-premium-box d-flex flex-column flex-md-row justify-content-around align-items-center gap-4">
          <div className="cta-bg-camera"></div>
          <div className="position-relative" style={{ zIndex: 2 }}>
            <h2 className="fw-bold mb-2 text-white" style={{ fontSize: '2.3rem', lineHeight: '1.2' }}>Results Driven by Creativity <br /><span className="text-red">Transform Ideas into Powerful Videos</span></h2>
            <p className="text-muted small mb-0">Motivational, Educational, Spiritual & Business Videos Crafted with Creativity and AI</p>
          </div>
          <div className="position-relative d-flex flex-column align-items-center align-items-md-end gap-2" style={{ zIndex: 2 }}>
            <a href="#" className="btn btn-red px-4 py-3 fw-bold">Get Started <i className="fa-solid fa-arrow-up-right-from-square"
              style={{ fontSize: '11px' }}></i></a>
            <div className="d-flex align-items-center gap-2 mt-4">
              <div className="d-flex image-overlap">
                <img src="/front/image/user2.png?w=50"
                  className="rounded-circle border border-dark"
                  style={{ width: '34px', height: '34px', objectFit: 'cover', marginRight: '-6px' }} />
                <img src="/front/image/user.jpeg?w=50"
                  className="rounded-circle border border-dark"
                  style={{ width: '34px', height: '34px', objectFit: 'cover', marginRight: '-6px' }} />
                <img src="/front/image/user3.png?w=50"
                  className="rounded-circle border border-dark" style={{ width: '34px', height: '34px', objectFit: 'cover' }} />
              </div>
              <span className="text-muted" style={{ fontSize: '11px' }}>10+ Clients</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

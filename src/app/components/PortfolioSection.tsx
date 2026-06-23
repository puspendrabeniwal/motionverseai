'use client';

import Link from 'next/dist/client/link';
import { useRef, useState } from 'react';

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('all');
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (currentIndex: number) => {
    const currentVideo = videoRefs.current[currentIndex];
    if (!currentVideo) return;

    if (!currentVideo.paused) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      return;
    }

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index !== currentIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });

    currentVideo.play().catch(() => {});
  };

  return (
    <>
        <section className="container" style={{ marginTop: '150px', marginBottom: '70px' }}>
            <div className="row align-items-center g-5">
            <div className="col-lg-6">
                <span className="text-red fw-bold text-uppercase tracking-wider small">Portfolio</span>
                <h1 className="main-title mt-2 mb-4">Explore Our <span className="text-red">Cinematic</span> Work<br />and Service Showcase</h1>
                <p className="text-secondary mb-4 pb-2 lh-base">See how MotionVerseAI brings stories to life with creative editing, motion graphics, and AI-enhanced production.</p>
                <a href="https://wa.me/919024377055" target="_blank" rel="noreferrer noopener" className="btn btn-red">Book a Call <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i></a>
            </div>
            <div className="col-lg-6">
                <div className="video-box" style={{ minHeight: '380px' }}>
                <video
                    ref={(el) => {
                    videoRefs.current[0] = el;
                    }}
                    src='/front/videos/final-wildlife.mp4'
                    preload="metadata"
                    onClick={() => handleVideoClick(0)}
                    className="w-100 h-100"
                />
                </div>
            </div>
            </div>
        </section>

        <section className="py-3">
            <div className="container">
            <div className="text-center mb-3 headingText">
                <div className="section-divider">Cinematic <span>Creations</span></div>
            </div>
            <p className="text-muted text-center small mb-4">Turning ideas into immersive visual stories that engage audiences and elevate brands.</p>
            <div className="row">
                <div className="col-lg-7">
                <div className="work-card p-4 d-flex flex-column align-items-end justify-content-end">
                    <video
                    ref={(el) => {
                        videoRefs.current[1] = el;
                    }}
                    src='/front/videos/final-wildlife.mp4'
                    preload="metadata"
                    onClick={() => handleVideoClick(1)}
                    className="video-bg"
                    />
                    <div className="dark-gradient-overlay"></div>
                    <div className="work-card-content d-flex flex-column h-100 justify-content-end">
                    <div className="mt-5 pt-5">
                        <h2 className="fw-bold text-white mb-3" style={{ fontSize: '1.9rem', lineHeight: '1.2' }}>
                        Brand Promotion<br /><span className="text-red"> Through Cinematic Storytelling</span>
                        </h2>
                        <div className="row g-3 mt-1 text-start">
                        <div className="col-6 col-md-3">
                            <h6 className="mb-1 text-white small fw-bold">Creative Storytelling</h6>
                            <p className="text-muted mb-0" style={{ fontSize: '11px', lineHeight: 1.3 }}>We create stories that connect and inspire.</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h6 className="mb-1 text-white small fw-bold">High Quality</h6>
                            <p className="text-muted mb-0" style={{ fontSize: '11px', lineHeight: 1.3 }}>Top-notch editing with premium quality.</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h6 className="mb-1 text-white small fw-bold">Fast Delivery</h6>
                            <p className="text-muted mb-0" style={{ fontSize: '11px', lineHeight: 1.3 }}>Quick turnaround without compromising.</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h6 className="mb-1 text-white small fw-bold">Unlimited Revisions</h6>
                            <p className="text-muted mb-0" style={{ fontSize: '11px', lineHeight: 1.3 }}>We work until you're 100% satisfied.</p>
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
                        <video
                        ref={(el) => {
                            videoRefs.current[2] = el;
                        }}
                        src='/front/videos/science-everywhere.mp4'
                        preload="metadata"
                        onClick={() => handleVideoClick(2)}
                        />
                        <span className="badge bg-orange position-absolute bottom-0 end-0 m-2 text-white fw-bold" style={{ fontSize: '10px' }}>4K ULTRA HD</span>
                    </div>
                    </div>
                    <div className="col-6 mb-3">
                    <div className="video-box" style={{ height: '316px' }}>
                        <video
                        ref={(el) => {
                            videoRefs.current[3] = el;
                        }}
                        src='/front/videos/Rajasthani-icecream.mp4'
                        preload="metadata"
                        onClick={() => handleVideoClick(3)}
                        />
                        <span className="badge bg-orange position-absolute bottom-0 end-0 m-2 text-white fw-bold" style={{ fontSize: '10px' }}>4K ULTRA HD</span>
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
                    <a href="https://wa.me/919024377055" target="_blank" rel="noreferrer noopener" className="btn btn-green px-4 py-3 fw-bold">
                        WhatsApp <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section id="services">
            <div className="pt-5">
            <div className="text-center headingText">
                <div className="section-divider">Our <span>Services</span></div>
            </div>
            <p className="text-muted text-center small mb-4">We combine creativity, strategy, and AI-powered innovation to deliver impactful video solutions<br /> that help brands grow, engage audiences, and stand out in the digital world.</p>
            <div className="container text-center">
                <div className="video-tabs">
                <button 
                    className={`btn tab-btn btn-red m-1 ${
                    activeTab === "all" ? "active" : ""
                    }`} 
                    onClick={() => setActiveTab("all")}
                >All Videos</button>
                <button 
                    className={`btn tab-btn btn-red m-1 ${
                    activeTab === "educational" ? "active" : ""
                    }`} 
                    onClick={() => setActiveTab("educational")}
                >#Educational</button>
                <button 
                    className={`btn tab-btn btn-red m-1 ${
                    activeTab === "brands" ? "active" : ""
                    }`} 
                    onClick={() => setActiveTab("brands")}
                >#Product Promo</button>
                <button 
                    className={`btn tab-btn btn-red m-1 ${
                    activeTab === "events" ? "active" : ""
                    }`} 
                    onClick={() => setActiveTab("events")}
                >#Short Form Content</button>
                </div>


                <div 
                className={`tab-content-box pt-3 ${
                    activeTab === "all"  ? "" : "d-none"
                }`} 
                id="all"
                >
                <div className="row row-cols-2 row-cols-md-4 g-3">
                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[11] = el;
                        }}
                        src='/front/videos/science-everywhere.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(11)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Science is everywhere</div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[12] = el;
                        }}
                        src='/front/videos/mobile-ads.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(12)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Brand Promotion</div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[13] = el;
                        }}
                        src='/front/videos/facewash-ads.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(13)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Advertising Video Editing</div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[14] = el;
                        }}
                        src='/front/videos/funny.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(14)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Events Editing</div>
                    </div>
                    </div>

                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[15] = el;
                        }}
                        src='/front/videos/digestion-system.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(15)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Digestion System</div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[21] = el;
                        }}
                        src='/front/videos/Rajasthani-icecream.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(21)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Lovely Sweet</div>
                    </div>
                    </div>
                </div>
                </div>


                <div 
                className={`tab-content-box pt-3 ${
                    activeTab === "educational" ? "" : "d-none"
                }`} 
                id="educational"
                >
                <div className="row row-cols-2 row-cols-md-4 g-3">
                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[16] = el;
                        }}
                        src='/front/videos/digestion-system.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(16)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Digestion System</div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[17] = el;
                        }}
                        src='/front/videos/science-everywhere.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(17)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Science is everywhere</div>
                    </div>
                    </div>
                </div>
                </div>


                <div 
                className={`tab-content-box pt-3 ${
                    activeTab === "brands" ? "" : "d-none"
                }`} 
                id="brands"
                >
                <div className="row row-cols-2 row-cols-md-4 g-3">
                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[18] = el;
                        }}
                        src='/front/videos/mobile-ads.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(18)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Brand Promotion</div>
                    </div>
                    </div>
                </div>
                </div>

                <div 
                className={`tab-content-box pt-3 ${
                    activeTab === "events" ? "" : "d-none"
                }`} 
                id="events">
                <div className="row row-cols-2 row-cols-md-4 g-3">
                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[19] = el;
                        }}
                        src='/front/videos/funny.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(19)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Events Editing</div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="service-video-card">
                        <video
                        ref={(el) => {
                            videoRefs.current[20] = el;
                        }}
                        src='/front/videos/Rajasthani-icecream.mp4'
                        //poster={video.poster}
                        preload="metadata"
                        onClick={() => handleVideoClick(20)}
                        />
                        {/* <div className="service-video-overlay"></div> */}
                        <div className="service-video-title text-white">Lovely Sweet</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="py-5 mt-5 bg-dark" style={{ borderRadius: '35px', marginLeft: '20px', marginRight: '20px' }}>
            <div className="container text-center">
                <div className="headingText mb-4">
                    Inspired by Our Portfolio?
                </div>
                <p className="text-secondary mb-4">
                    Share your project details with us and we’ll help you <br />create a smart,
          scalable, and result-driven digital solution that matches your business goals,
          audience, and budget.
                </p>
                <Link href="/contact" className="btn btn-green btn-lg">
                    Discuss Your Project
                </Link>
            </div>
        </section>
    </>
  );
}

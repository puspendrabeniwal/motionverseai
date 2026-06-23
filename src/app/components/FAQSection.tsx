'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'Services',
    question: 'What video editing and motion graphics services do you offer?',
    answer: 'We offer comprehensive video production services including professional video editing, motion graphics design, cinematic storytelling, product promotions, educational content, and AI-enhanced video creation. Our services cater to brands, creators, and businesses of all sizes.',
  },
  {
    id: 2,
    category: 'Services',
    question: 'Do you handle short-form and long-form content?',
    answer: 'Yes! We specialize in both. From short social media clips (15-60 seconds) to full-length cinematic videos, educational series, and commercial campaigns. Our team can adapt to any format and platform.',
  },
  {
    id: 3,
    category: 'Services',
    question: 'Can you work with raw footage I provide?',
    answer: 'Absolutely! We work with raw footage, existing videos, stock footage, or we can source appropriate materials. Just share your vision and requirements, and we will handle the creative execution.',
  },
  {
    id: 4,
    category: 'Pricing',
    question: 'What are your pricing packages?',
    answer: 'We offer three main packages:\n• Basic Package: $199/video (up to 30 seconds, 1 revision)\n• Growth Package: $349/video (up to 60 seconds, 2 revisions, advanced graphics)\n• Premium Package: $599/video (up to 90 seconds, unlimited revisions, premium visuals)\n\nCustom quotes available for larger projects.',
  },
  {
    id: 5,
    category: 'Pricing',
    question: 'Do you offer custom pricing for bulk orders?',
    answer: 'Yes! We offer competitive rates for multiple projects. For bulk or long-term partnerships, contact us directly at support@motionverseai.com or WhatsApp +91 9024377055 for a customized quote.',
  },
  {
    id: 6,
    category: 'Process',
    question: 'What is your typical project timeline?',
    answer: 'Delivery times depend on the package:\n• Basic: 2 days\n• Growth: 3 days\n• Premium: 5 days\n\nRush delivery options available for urgent projects. We always prioritize quality, so timelines may adjust for complex requests.',
  },
  {
    id: 7,
    category: 'Process',
    question: 'How many revisions are included?',
    answer: 'Each package includes a specific number of revisions:\n• Basic: 1 revision\n• Growth: 2 revisions\n• Premium: Unlimited revisions\n\nWe work until you are completely satisfied with the final output.',
  },
  {
    id: 8,
    category: 'Process',
    question: 'What is your project workflow?',
    answer: 'Our workflow includes:\n1. Initial consultation & requirements gathering\n2. Creative concept development\n3. Production & editing\n4. First draft delivery\n5. Revisions based on your feedback\n6. Final delivery & support\n\nWe keep you updated throughout the process.',
  },
  {
    id: 9,
    category: 'Technical',
    question: 'What video formats and resolutions do you provide?',
    answer: 'We deliver in multiple formats:\n• 4K Ultra HD (3840x2160)\n• Full HD 1080p\n• 720p\n• Social media optimized (vertical, square, landscape)\n• MP4, MOV, WebM formats\n\nCustom specifications available upon request.',
  },
  {
    id: 10,
    category: 'Technical',
    question: 'Do you use AI in your video production?',
    answer: 'Yes! We leverage AI-powered tools to enhance our creative process, including AI upscaling, intelligent color grading, motion prediction, and automated editing assistance. This allows us to deliver premium quality faster without compromising on creativity.',
  },
  {
    id: 11,
    category: 'Technical',
    question: 'What software and tools do you use?',
    answer: 'We use industry-leading software including Adobe Creative Suite (Premiere Pro, After Effects), DaVinci Resolve, Cinema 4D, and various AI-enhanced tools. Our tech stack ensures professional-grade output with cutting-edge capabilities.',
  },
  {
    id: 12,
    category: 'Support',
    question: 'What kind of support do you provide after delivery?',
    answer: 'We offer comprehensive post-delivery support including:\n• File format conversions\n• Minor tweaks and adjustments\n• Technical guidance\n• Usage optimization tips\n\nReach out to us anytime via email or WhatsApp.',
  },
  {
    id: 13,
    category: 'Support',
    question: 'Can you provide consultation on video strategy?',
    answer: 'Yes! Beyond production, we can advise on:\n• Video strategy and content planning\n• Platform optimization\n• Audience engagement techniques\n• Trend analysis and recommendations\n\nContact us for a strategy consultation call.',
  },
  {
    id: 14,
    category: 'Support',
    question: 'How do I get started?',
    answer: 'Getting started is simple:\n1. Click "Let\'s Talk" or message us on WhatsApp\n2. Share your project details and vision\n3. Receive a customized quote\n4. Approve and begin production\n5. Track progress and provide feedback\n\nWe\'re here to make the process smooth and enjoyable!',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqData.map((item) => item.category)))];
  const filteredFAQ = selectedCategory === 'All' ? faqData : faqData.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <section className="container" style={{ marginTop: '150px', marginBottom: '70px' }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-8 mx-auto text-center animate-fade-up">
            <span className="text-red fw-bold text-uppercase tracking-wider small">Help & Support</span>
            <h1 className="main-title mt-2 mb-4">Frequently Asked <span className="text-red">Questions</span></h1>
            <p className="text-secondary mb-5 pb-2 lh-base">
              Find answers to common questions about our services, pricing, process, and technical capabilities. Can't find what you're looking for? Reach out to us directly!
            </p>

            <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
              {categories.map((category) => (
                <button key={category} onClick={() => setSelectedCategory(category)} className={`btn btn-sm ${selectedCategory === category ? 'btn-red' : 'btn-outline-secondary'}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="faq-container">
                {filteredFAQ.map((item, index) => (
                  <div key={item.id} className="faq-item mb-3 animate-fade-up" style={{ animationDelay: `${(index % 3) * 0.1}s` }}>
                    <button className="faq-header w-100 p-4 text-start border-0 bg-dark text-white rounded-lg mb-0" onClick={() => toggleAccordion(item.id)} style={{ cursor: 'pointer' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 fw-bold pe-3">{item.question}</h6>
                        <i className={`fa-solid fa-chevron-down text-red transition`} style={{ transform: openId === item.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', minWidth: '20px' }}></i>
                      </div>
                    </button>
                    {openId === item.id && (
                      <div className="faq-content p-4 border border-top-0 border-secondary rounded-bottom bg-dark text-secondary animate-fade-up" style={{ animationDuration: '300ms' }}>
                        <p className="mb-0 lh-base" style={{ whiteSpace: 'pre-line' }}>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}

                {filteredFAQ.length === 0 && (
                  <div className="text-center py-5">
                    <p className="text-muted">No questions found in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="fw-bold text-white mb-3">Didn't find your answer?</h3>
              <p className="text-secondary mb-4">Our team is always ready to help! Reach out through any of these channels and we'll get back to you as soon as possible.</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="mailto:support@motionverseai.com" className="btn btn-outline-secondary"><i className="fa-solid fa-envelope me-2"></i>Email Us</a>
                <a href="https://wa.me/919024377055" target="_blank" rel="noreferrer" className="btn btn-green"><i className="fa-brands fa-whatsapp me-2"></i>WhatsApp Chat</a>
                <a href="/contact" className="btn btn-red"><i className="fa-solid fa-message me-2"></i>Contact Form</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

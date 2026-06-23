import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Terms & Conditions | MotionVerseAI",
  description: "Read the terms and conditions that govern MotionVerseAI’s video services and client agreements.",
};

export default function Terms() {
  return (
    <>
      <Header />
      <div className="pt-5">
        <section className="py-5" style={{ marginTop: '60px' }}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="text-red fw-bold text-uppercase small tracking-wider">Terms & Conditions</span>
                <h1 className="headingText mb-3">Clear Terms for Trusted Service</h1>
                <p className="text-secondary mb-4">
                  MotionVerseAI outlines how our services work, what you can expect, and how we protect both clients and creators. Read the terms that keep every project safe, fair, and fully supported.
                </p>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-xl-8 col-lg-10 text-start">
                <p className="text-muted mb-4">Last updated: June 2026</p>
                <div className="policy-section space-y-4">
                  <div className="mb-5">
                    <h3>1. Agreement to Terms</h3>
                    <p>
                      By accessing and using the MotionVerseAI website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this service.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">2. Use License</h3>
                    <p className="text-muted">
                      Permission is granted to temporarily download one copy of the materials (information or software) on MotionVerseAI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="text-muted ps-4">
                      <li>Modifying or copying the materials</li>
                      <li>Using the materials for any commercial purpose or for any public display</li>
                      <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                      <li>Removing any copyright or other proprietary notations from the materials</li>
                      <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                      <li>Violating any applicable laws or regulations</li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">3. Disclaimer</h3>
                    <p className="text-muted">
                      The materials on MotionVerseAI's website are provided on an 'as is' basis. MotionVerseAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">4. Limitations</h3>
                    <p className="text-muted">
                      In no event shall MotionVerseAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MotionVerseAI's website, even if MotionVerseAI or an authorized representative has been notified orally or in writing of the possibility of such damage.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">5. Accuracy of Materials</h3>
                    <p className="text-muted">
                      The materials appearing on MotionVerseAI's website could include technical, typographical, or photographic errors. MotionVerseAI does not warrant that any of the materials on the website are accurate, complete, or current. MotionVerseAI may make changes to the materials contained on its website at any time without notice.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">6. Links</h3>
                    <p className="text-muted">
                      MotionVerseAI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by MotionVerseAI of the site. Use of any such linked website is at the user's own risk.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">7. Modifications</h3>
                    <p className="text-muted">
                      MotionVerseAI may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">8. Intellectual Property Rights</h3>
                    <p className="text-muted">
                      All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of MotionVerseAI or its content suppliers and is protected by international copyright laws.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">9. Governing Law</h3>
                    <p className="text-muted">
                      These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">10. Contact Information</h3>
                    <p className="text-muted">
                      If you have any questions about these Terms and Conditions, please contact us at:
                      <br />
                      Email: support@motionverseai.com
                      <br />
                      Phone: +91 9024377055
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Privacy Policy | MotionVerseAI",
  description: "Discover how MotionVerseAI collects, uses, and protects your personal data.",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <div className="pt-5">
        <section className="py-5" style={{ marginTop: '60px' }}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="text-red fw-bold text-uppercase small tracking-wider">Privacy Policy</span>
                <h1 className="headingText mb-3">Your Privacy, Our Priority</h1>
                <p className="text-secondary mb-4">
                  MotionVerseAI respects your data and transparency. This policy explains what we collect, how we use it, and how we keep your information safe while you work with us.
                </p>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-xl-8 col-lg-10 text-start">
                <p className="text-muted mb-4">Last updated: June 2026</p>
                <div className="policy-section space-y-4">
                  <div className="mb-5">
                    <h3>1. Introduction</h3>
                    <p>
                      MotionVerseAI ("we", "our", or "us") operates the motionverseai.com website. This policy explains how we collect, use, and protect your information when you use our service.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">2. Information Collection and Use</h3>
                    <p className="text-muted fw-bold text-white">We collect several different types of information:</p>
                    <p className="text-muted mt-2">
                      <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include:
                    </p>
                    <ul className="text-muted ps-4">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Phone number</li>
                      <li>Address, State, Province, ZIP/Postal code, City</li>
                      <li>Cookies and Usage Data</li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">3. Use of Data</h3>
                    <p className="text-muted">
                      MotionVerseAI uses the collected data for various purposes:
                    </p>
                    <ul className="text-muted ps-4">
                      <li>To provide and maintain our Service</li>
                      <li>To notify you about changes to our Service</li>
                      <li>To allow you to participate in interactive features of our Service</li>
                      <li>To provide customer support</li>
                      <li>To gather analysis or valuable information so that we can improve our Service</li>
                      <li>To monitor the usage of our Service</li>
                      <li>To detect, prevent and address technical issues and security incidents</li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">4. Security of Data</h3>
                    <p className="text-muted">
                      The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">5. Changes to This Privacy Policy</h3>
                    <p className="text-muted">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">6. Cookies</h3>
                    <p className="text-muted">
                      We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">7. Third-Party Service Providers</h3>
                    <p className="text-muted">
                      We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">8. Children's Privacy</h3>
                    <p className="text-muted">
                      Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us immediately.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">9. Contact Us</h3>
                    <p className="text-muted">
                      If you have any questions about this Privacy Policy, please contact us at:
                      <br />
                      Email: support@motionverseai.com
                      <br />
                      Phone: +91 9024377055
                      <br />
                      Address: 81, Krishna Vihar, Jaipur
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

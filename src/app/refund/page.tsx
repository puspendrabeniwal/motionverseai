import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Refund Policy | MotionVerseAI",
  description: "View MotionVerseAI’s refund policy, eligibility criteria, and refund process details.",
};

export default function Refund() {
  return (
    <>
      <Header />
      <div className="pt-5">
        <section className="py-5" style={{ marginTop: '60px' }}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="text-red fw-bold text-uppercase small tracking-wider">Refund Policy</span>
                <h1 className="headingText mb-3">Fair Refunds for Reliable Projects</h1>
                <p className="text-secondary mb-4">
                  MotionVerseAI supports your satisfaction with a transparent refund process, clear eligibility standards, and prompt issue resolution. Learn how we handle requests responsibly.
                </p>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-xl-8 col-lg-10 text-start">
                <p className="text-muted mb-4">Last updated: June 2026</p>
                <div className="policy-section space-y-4">
                  <div className="mb-5">
                    <h3>1. Overview</h3>
                    <p>
                      At MotionVerseAI, we stand behind the quality of our video production services. This refund policy explains when refunds are available and how we support client satisfaction.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">2. 30-Day Satisfaction Guarantee</h3>
                    <p className="text-muted">
                      We offer a 30-day satisfaction guarantee from the date of final project delivery. If you are not completely satisfied with the final deliverables, you may request a refund within this period.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">3. Refund Eligibility</h3>
                    <p className="text-muted fw-bold text-white">A refund may be issued if:</p>
                    <ul className="text-muted ps-4">
                      <li>The request is made within 30 days of project delivery</li>
                      <li>The final deliverables do not meet the specifications outlined in your service agreement</li>
                      <li>The video content fails to meet the quality standards promised by MotionVerseAI</li>
                      <li>The service was completely non-functional or unusable</li>
                      <li>You notify us of defects or issues before using the final deliverables for commercial purposes</li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">4. Non-Refundable Services</h3>
                    <p className="text-muted fw-bold text-white">Refunds will NOT be issued for:</p>
                    <ul className="text-muted ps-4">
                      <li>Services already rendered in full and accepted by the client</li>
                      <li>Client requests for creative direction changes after project completion</li>
                      <li>Services partially completed due to client-requested project suspension or cancellation</li>
                      <li>Projects where client provides late or incomplete materials that affect delivery</li>
                      <li>Services used commercially before the refund request</li>
                      <li>Requests made beyond the 30-day refund window</li>
                      <li>Custom development or bespoke projects that were delivered as specified</li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">5. Refund Request Process</h3>
                    <p className="text-muted">
                      To request a refund, follow these steps:
                    </p>
                    <ol className="text-muted ps-4">
                      <li>Contact our support team at support@motionverseai.com with your project details</li>
                      <li>Provide a detailed description of the issue or reason for the refund request</li>
                      <li>Include any relevant documentation or evidence supporting your request</li>
                      <li>Our team will review your request within 5-7 business days</li>
                      <li>If approved, refunds will be processed within 14 days to your original payment method</li>
                    </ol>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">6. Partial Refunds</h3>
                    <p className="text-muted">
                      In cases where partial work has been completed and accepted, a prorated refund may be issued based on the percentage of work completed. Any preliminary files or content already delivered will remain the property of MotionVerseAI.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">7. Revision Requests</h3>
                    <p className="text-muted">
                      Before requesting a refund, please note that all our packages include revision rounds. We encourage clients to utilize these revisions to achieve their desired results. Refunds will not be issued if revisions have not been exhausted or if the work was not submitted for revision feedback.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">8. Project Cancellation</h3>
                    <p className="text-muted">
                      If you need to cancel a project before work begins:
                    </p>
                    <ul className="text-muted ps-4">
                      <li>Full refund if cancelled before project initiation</li>
                      <li>50% refund if cancelled after project starts but before 50% completion</li>
                      <li>25% refund if cancelled after 50% completion</li>
                      <li>No refund if cancelled after 75% completion or when project is complete</li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">9. Intellectual Property Rights</h3>
                    <p className="text-muted">
                      Upon refund, all intellectual property rights, source files, and preliminary work created for the project revert to MotionVerseAI. You will no longer have rights to use any deliverables or work products associated with the refunded project.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">10. Dispute Resolution</h3>
                    <p className="text-muted">
                      If there is a dispute regarding a refund, both parties agree to attempt resolution through good faith discussion first. If an agreement cannot be reached, the matter will be referred to an independent mediator or legal arbitration as per the laws governing India.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">11. Changes to This Policy</h3>
                    <p className="text-muted">
                      We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any modification constitutes your acceptance of the updated policy.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-white fs-5 fw-bold mb-3">12. Contact Information</h3>
                    <p className="text-muted">
                      For any questions or concerns regarding this Refund Policy, please contact us:
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

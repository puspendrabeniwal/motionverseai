import Header from "../components/Header";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "FAQ | MotionVerseAI",
  description: "Find answers to common questions about MotionVerseAI video services, pricing, process, and support.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <FAQSection />
      <Footer />
    </>
  );
}
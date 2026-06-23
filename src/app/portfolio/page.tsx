import Header from "../components/Header";
import PortfolioSection from "../components/PortfolioSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portfolio | MotionVerseAI",
  description: "Browse cinematic video projects and service showcases created by MotionVerseAI.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <PortfolioSection />
      <Footer />
    </>
  );
}
          
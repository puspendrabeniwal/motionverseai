import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";

export const metadata = {
  title: "MotionVerseAI | AI Video Production Studio",
  description: "Transform your vision into motion with AI-powered video production, cinematic editing, and premium motion graphics.",
};

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <Footer />
    </>
  );
}

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Traction from "./components/Traction";
import Team from "./components/Team";
import Investors from "./components/Investors";
import Footer from "./components/Footer";

export const metadata = {
  title: "CropSense — AI for Low-Pesticide Agriculture",
  description:
    "Computer vision that detects crop threats early. Precision treatment recommendations that cut pesticide use by 40%.",
};

export default function CropSensePage() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Traction />
        <Team />
        <Investors />
      </main>
      <Footer />
    </div>
  );
}

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Contato from "./components/Contato";
import Developers from "./components/Developers";
import Jhonny from "./components/AboutJhonny"
import Prieto from "./components/AboutPrieto"
import Albano from "./components/AboutAlbano"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <About/>
        <Developers/>
        <Jhonny/>
        <Prieto/>
        <Albano/>
        <Contato />
      </div>
      <Footer />
    </main>
  );
}
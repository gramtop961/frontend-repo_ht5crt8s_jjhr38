import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Carousel from './components/Carousel';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-[#08080b] text-white antialiased selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Carousel />
        <CTASection />
      </main>
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Pulse — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

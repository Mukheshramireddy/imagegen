import { useState } from 'react';
import GeneratorList from './components/GeneratorList';
import ComparisonTable from './components/ComparisonTable';
import TipsSection from './components/TipsSection';

function App() {
  const [activeSection, setActiveSection] = useState('generators');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-primary to-purple-500 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Free AI Image Generator Directory</h1>
          <p className="text-xl opacity-90">Discover the best free AI image generators with no login required</p>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Create Amazing Images Without Paying a Penny</h2>
            <p className="max-w-3xl mx-auto text-lg mb-8">
              Welcome to the ultimate directory of free AI image generators. All tools listed here are completely free to use, 
              require no installation, and most don't even need you to create an account. Simply click on any generator to start creating!
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeSection === 'generators' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveSection('generators')}
              >
                Generators
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeSection === 'comparison' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveSection('comparison')}
              >
                Comparison
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeSection === 'tips' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveSection('tips')}
              >
                Tips
              </button>
            </div>
          </div>
        </section>

        {activeSection === 'generators' && <GeneratorList />}
        {activeSection === 'comparison' && <ComparisonTable />}
        {activeSection === 'tips' && <TipsSection />}
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="opacity-80 text-sm mb-2">&copy; 2025 Free AI Image Generator Directory. This site is not affiliated with any of the listed services.</p>
          <p className="opacity-80 text-sm">Last updated: May 25, 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

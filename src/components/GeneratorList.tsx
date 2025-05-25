import { useState } from 'react';
import GeneratorCard from './GeneratorCard';
import { GeneratorData } from '../types';

// Generator data
const generators: GeneratorData[] = [
  {
    id: 'raphael-ai',
    name: 'Raphael AI',
    description: 'Create unlimited AI-generated images online instantly - 100% free, no sign-up needed. Offers various artistic styles and customization options.',
    imageUrl: '/src/assets/images/raphael-ai.jpg',
    url: 'https://raphaelai.org/',
    tags: ['No Login', 'Unlimited', 'High Quality'],
    features: [
      { icon: '⚡', text: 'Generation Speed: Fast' },
      { icon: '🖼️', text: 'Image Quality: High' },
      { icon: '🔄', text: 'Daily Limit: Unlimited' }
    ],
    categories: ['no-login', 'high-quality']
  },
  {
    id: 'deepimg',
    name: 'DeepIMG',
    description: 'Transform your ideas into stunning visuals with this free AI image generator. No sign-up, no watermarks, and high-resolution output for various creative needs.',
    imageUrl: '/src/assets/images/deepimg.jpg',
    url: 'https://deepimg.ai/ai-image-generator/',
    tags: ['No Login', 'No Watermarks', 'Multiple Styles'],
    features: [
      { icon: '⚡', text: 'Generation Speed: Medium' },
      { icon: '🖼️', text: 'Image Quality: Very High' },
      { icon: '🔄', text: 'Daily Limit: High' }
    ],
    categories: ['no-login', 'high-quality']
  },
  {
    id: 'craiyon',
    name: 'Craiyon (Formerly DALL-E Mini)',
    description: 'A popular free AI image generator that creates images from any text prompt. Simple interface with no login required, though image quality is lower than some alternatives.',
    imageUrl: '/src/assets/images/craiyon.jpg',
    url: 'https://www.craiyon.com/',
    tags: ['No Login', 'Fast', 'Simple'],
    features: [
      { icon: '⚡', text: 'Generation Speed: Very Fast' },
      { icon: '🖼️', text: 'Image Quality: Medium' },
      { icon: '🔄', text: 'Daily Limit: Unlimited' }
    ],
    categories: ['no-login', 'fast']
  },
  {
    id: 'lexica',
    name: 'Lexica',
    description: 'Lexica offers both a search engine for AI art and a powerful image generator. Free tier available with some limitations, but exceptional image quality.',
    imageUrl: '/src/assets/images/lexica.jpg',
    url: 'https://lexica.art/',
    tags: ['High Quality', 'Stable Diffusion', 'Prompt Library'],
    features: [
      { icon: '⚡', text: 'Generation Speed: Medium' },
      { icon: '🖼️', text: 'Image Quality: Excellent' },
      { icon: '🔄', text: 'Daily Limit: 10 (Free)' }
    ],
    categories: ['high-quality']
  },
  {
    id: 'pixlr',
    name: 'Pixlr AI Image Generator',
    description: 'Pixlr combines AI image generation with powerful photo editing tools. The free version allows for basic image generation without requiring an account.',
    imageUrl: '/src/assets/images/pixlr.jpg',
    url: 'https://pixlr.com/image-generator/',
    tags: ['No Login', 'Fast', 'Photo Editor'],
    features: [
      { icon: '⚡', text: 'Generation Speed: Fast' },
      { icon: '🖼️', text: 'Image Quality: Good' },
      { icon: '🔄', text: 'Daily Limit: Limited' }
    ],
    categories: ['no-login', 'fast']
  },
  {
    id: 'playground',
    name: 'Playground AI',
    description: 'Playground AI offers free access to multiple AI models including DALL-E 2 and Stable Diffusion. Free tier includes a generous number of daily generations.',
    imageUrl: '/src/assets/images/playground.jpg',
    url: 'https://playgroundai.com/',
    tags: ['High Quality', 'Multiple Models', 'Community'],
    features: [
      { icon: '⚡', text: 'Generation Speed: Medium' },
      { icon: '🖼️', text: 'Image Quality: Excellent' },
      { icon: '🔄', text: 'Daily Limit: 100+ (Free)' }
    ],
    categories: ['high-quality']
  }
];

const GeneratorList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter generators based on search term and active filter
  const filteredGenerators = generators.filter(generator => {
    const matchesSearch = generator.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         generator.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         generator.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = activeFilter === 'all' || generator.categories.includes(activeFilter);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="search-filter mb-8">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search for generators..." 
            className="w-full p-4 border border-border rounded-lg text-base mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="filter-options flex flex-wrap gap-2 justify-center">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-background-light border-border'}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'no-login' ? 'bg-primary text-white' : 'bg-background-light border-border'}`}
              onClick={() => setActiveFilter('no-login')}
            >
              No Login
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'high-quality' ? 'bg-primary text-white' : 'bg-background-light border-border'}`}
              onClick={() => setActiveFilter('high-quality')}
            >
              High Quality
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'fast' ? 'bg-primary text-white' : 'bg-background-light border-border'}`}
              onClick={() => setActiveFilter('fast')}
            >
              Fast Generation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGenerators.map(generator => (
            <GeneratorCard key={generator.id} generator={generator} />
          ))}
        </div>

        {filteredGenerators.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl mb-2">No generators found</h3>
            <p className="text-text-light">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GeneratorList;

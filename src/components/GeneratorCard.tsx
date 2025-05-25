import { GeneratorData } from '../types';

interface GeneratorCardProps {
  generator: GeneratorData;
}

const GeneratorCard = ({ generator }: GeneratorCardProps) => {
  return (
    <div className="card" data-categories={generator.categories.join(' ')}>
      <div className="h-48 overflow-hidden">
        <img 
          src={generator.imageUrl} 
          alt={`${generator.name} Interface`} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{generator.name}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {generator.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <p className="text-text-light mb-4">{generator.description}</p>
        <div className="mb-6">
          {generator.features.map((feature, index) => (
            <div key={index} className="feature">
              <span className="feature-icon">{feature.icon}</span>
              <span className="feature-text">{feature.text}</span>
            </div>
          ))}
        </div>
        <a 
          href={generator.url} 
          className="btn-primary" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Try {generator.name}
        </a>
      </div>
    </div>
  );
};

export default GeneratorCard;

// ComparisonTable component

const ComparisonTable = () => {
  const generatorData = [
    {
      name: 'Raphael AI',
      login: 'No',
      quality: 'High',
      speed: 'Fast',
      limit: 'Unlimited',
      features: 'Multiple styles, aspect ratios'
    },
    {
      name: 'DeepIMG',
      login: 'No',
      quality: 'Very High',
      speed: 'Medium',
      limit: 'High',
      features: 'No watermarks, style selection'
    },
    {
      name: 'Craiyon',
      login: 'No',
      quality: 'Medium',
      speed: 'Very Fast',
      limit: 'Unlimited',
      features: 'Simple interface, multiple outputs'
    },
    {
      name: 'Lexica',
      login: 'Yes (for generation)',
      quality: 'Excellent',
      speed: 'Medium',
      limit: '10 (Free)',
      features: 'Prompt library, advanced controls'
    },
    {
      name: 'Pixlr',
      login: 'No',
      quality: 'Good',
      speed: 'Fast',
      limit: 'Limited',
      features: 'Integrated photo editor'
    },
    {
      name: 'Playground AI',
      login: 'Yes',
      quality: 'Excellent',
      speed: 'Medium',
      limit: '100+ (Free)',
      features: 'Multiple AI models, community'
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Comparison of Free AI Image Generators</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left font-semibold">Generator</th>
                <th className="p-4 text-left font-semibold">Login Required</th>
                <th className="p-4 text-left font-semibold">Image Quality</th>
                <th className="p-4 text-left font-semibold">Generation Speed</th>
                <th className="p-4 text-left font-semibold">Daily Limit</th>
                <th className="p-4 text-left font-semibold">Special Features</th>
              </tr>
            </thead>
            <tbody>
              {generatorData.map((generator, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="p-4 font-medium">{generator.name}</td>
                  <td className="p-4">{generator.login}</td>
                  <td className="p-4">{generator.quality}</td>
                  <td className="p-4">{generator.speed}</td>
                  <td className="p-4">{generator.limit}</td>
                  <td className="p-4">{generator.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

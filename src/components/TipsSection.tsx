// TipsSection component

const TipsSection = () => {
  const tips = [
    {
      title: '1. Be Specific in Your Prompts',
      description: 'The more detailed your description, the better the results. Include information about style, lighting, composition, and mood.',
      example: {
        basic: 'A mountain landscape',
        better: 'A majestic mountain landscape at sunset with golden light, dramatic clouds, pine trees in the foreground, photorealistic style'
      }
    },
    {
      title: '2. Specify Art Styles',
      description: 'Including specific art styles in your prompt can dramatically change the output. Try terms like "digital art," "oil painting," "watercolor," "anime style," or "photorealistic."'
    },
    {
      title: '3. Use Reference Artists',
      description: 'Mentioning well-known artists can help guide the style. For example, "in the style of Van Gogh" or "like a Wes Anderson film."'
    },
    {
      title: '4. Experiment with Different Generators',
      description: 'Each AI model has different strengths. If you don\'t get good results with one generator, try another with the same prompt.'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Tips for Getting the Best Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-primary">{tip.title}</h3>
              <p className="mb-4 text-gray-700">{tip.description}</p>
              
              {tip.example && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-medium mb-1">Basic prompt: "{tip.example.basic}"</p>
                  <p className="font-medium">Better prompt: "{tip.example.better}"</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;

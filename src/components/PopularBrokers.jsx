
import { brokers } from '@/data/mockBatches';

const PopularBrokers = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Top Brokers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our students trade with confidence on India's leading platforms
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-horizontal space-x-12 py-8">
            {[...brokers, ...brokers].map((broker, index) => (
              <div 
                key={`${broker.id}-${index}`}
                className="flex-shrink-0 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[250px]"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {broker.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{broker.name}</h3>
                    <p className="text-sm text-muted-foreground">{broker.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBrokers;

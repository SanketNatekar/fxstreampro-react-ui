
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { mockBatches } from '@/data/mockBatches';

const PopularBatches = () => {
  // Get the first 3 batches with highest ratings
  const popularBatches = mockBatches
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Trading Batches
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our most sought-after courses and start your trading journey with expert guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularBatches.map((batch, index) => (
            <Card 
              key={batch.id}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{batch.level}</Badge>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm font-medium">{batch.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{batch.title}</CardTitle>
                <CardDescription>{batch.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Duration:</span>
                    <span className="text-sm font-medium">{batch.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Students:</span>
                    <span className="text-sm font-medium">{batch.students} enrolled</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Instructor:</span>
                    <span className="text-sm font-medium">{batch.instructor}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-2xl font-bold text-trading-primary">{batch.price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link to={`/batch/${batch.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
                <Link to="/signup" className="flex-1">
                  <Button className="w-full gradient-primary text-white">
                    Enroll Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/dashboard">
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg"
            >
              View All Batches
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularBatches;

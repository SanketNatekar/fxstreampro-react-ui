
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Batch {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  studentsEnrolled: number;
  image: string;
  instructor: string;
}

interface BatchCardProps {
  batch: Batch;
  showEnrollButton?: boolean;
}

const BatchCard = ({ batch, showEnrollButton = true }: BatchCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-scale-in">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={batch.image} 
          alt={batch.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <Badge className={getLevelColor(batch.level)}>
            {batch.level}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{batch.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {batch.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>👨‍🏫 {batch.instructor}</span>
          <span>⏱️ {batch.duration}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>👥 {batch.studentsEnrolled} students</span>
          <span className="text-lg font-bold text-trading-primary">${batch.price}</span>
        </div>
      </CardContent>
      
      {showEnrollButton && (
        <CardFooter className="flex gap-2">
          <Link to={`/batch/${batch.id}`} className="flex-1">
            <Button className="w-full gradient-primary text-white hover:opacity-90 transition-opacity">
              View Details
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default BatchCard;

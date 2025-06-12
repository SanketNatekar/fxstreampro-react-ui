
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { mockBatches } from '@/data/mockBatches';
import Navbar from '@/components/Navbar';

const UserDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [enrolledBatches, setEnrolledBatches] = useState([]);

  const handleEnroll = (batchId) => {
    const batch = mockBatches.find(b => b.id === batchId);
    if (batch && !enrolledBatches.find(eb => eb.id === batchId)) {
      setEnrolledBatches([...enrolledBatches, batch]);
      
      // Create and trigger download
      const element = document.createElement('a');
      const file = new Blob([`Welcome to ${batch.title}!\n\nBatch Details:\n- Duration: ${batch.duration}\n- Price: ${batch.price}\n- Schedule: ${batch.schedule}\n\nThank you for enrolling with FxStreampro!`], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `${batch.title}-enrollment.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  const availableBatches = mockBatches.filter(batch => 
    !enrolledBatches.find(eb => eb.id === batch.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-muted-foreground">
            Continue your trading journey with our expert-led batches
          </p>
        </div>

        {/* Enrolled Batches Section */}
        {enrolledBatches.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Your Enrolled Batches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledBatches.map((batch) => (
                <Card key={batch.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary" className="mb-2">Enrolled</Badge>
                    </div>
                    <CardTitle className="text-lg">{batch.title}</CardTitle>
                    <CardDescription>{batch.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Duration:</span> {batch.duration}</p>
                      <p><span className="font-medium">Schedule:</span> {batch.schedule}</p>
                      <p><span className="font-medium">Level:</span> {batch.level}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/batch/${batch.id}`} className="w-full">
                      <Button className="w-full">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Available Batches Section */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Available Batches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBatches.map((batch) => (
              <Card key={batch.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline">{batch.level}</Badge>
                    <span className="text-2xl font-bold text-trading-primary">{batch.price}</span>
                  </div>
                  <CardTitle className="text-lg">{batch.title}</CardTitle>
                  <CardDescription>{batch.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Duration:</span> {batch.duration}</p>
                    <p><span className="font-medium">Schedule:</span> {batch.schedule}</p>
                    <p><span className="font-medium">Students:</span> {batch.students} enrolled</p>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Link to={`/batch/${batch.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                  <Button 
                    onClick={() => handleEnroll(batch.id)}
                    className="flex-1 gradient-primary text-white"
                  >
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Smile, Meh, Frown, Heart, Star } from "lucide-react";

const moodData = [
  { date: 'Mon', mood: 'good', score: 8 },
  { date: 'Tue', mood: 'neutral', score: 6 },
  { date: 'Wed', mood: 'good', score: 9 },
  { date: 'Thu', mood: 'excellent', score: 10 },
  { date: 'Fri', mood: 'good', score: 8 },
  { date: 'Sat', mood: 'neutral', score: 7 },
  { date: 'Sun', mood: 'good', score: 8 },
];

const getMoodIcon = (mood: string) => {
  switch (mood) {
    case 'excellent':
      return <Star className="h-6 w-6 text-yellow-500" />;
    case 'good':
      return <Smile className="h-6 w-6 text-green-500" />;
    case 'neutral':
      return <Meh className="h-6 w-6 text-blue-500" />;
    case 'poor':
      return <Frown className="h-6 w-6 text-red-500" />;
    default:
      return <Heart className="h-6 w-6 text-gray-500" />;
  }
};

export function MoodTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Mood Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-7 gap-2">
            {moodData.map((day) => (
              <div key={day.date} className="text-center">
                <p className="text-sm font-medium mb-2">{day.date}</p>
                <div className="flex justify-center mb-2">
                  {getMoodIcon(day.mood)}
                </div>
                <Badge variant="outline" className="text-xs">
                  {day.score}/10
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-4">
            <h4 className="font-medium mb-3">How are you feeling today?</h4>
            <div className="grid grid-cols-4 gap-2">
              <Button variant="outline" className="h-16 flex flex-col gap-1">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-xs">Excellent</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-1">
                <Smile className="h-5 w-5 text-green-500" />
                <span className="text-xs">Good</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-1">
                <Meh className="h-5 w-5 text-blue-500" />
                <span className="text-xs">Neutral</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-1">
                <Frown className="h-5 w-5 text-red-500" />
                <span className="text-xs">Poor</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, BookOpen, Play, ExternalLink } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Managing Study Stress",
    description: "Learn effective techniques to handle academic pressure and maintain mental wellbeing during exams.",
    type: "Article",
    duration: "5 min read",
    category: "Stress Management",
    image: "https://images.unsplash.com/photo-1677676429442-e2f9529f8169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NTc4Njg5Njl8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 2,
    title: "Mindfulness for Students",
    description: "A guided meditation session designed specifically for students to reduce anxiety and improve focus.",
    type: "Audio",
    duration: "10 min",
    category: "Mindfulness",
    image: "https://images.unsplash.com/photo-1599744403700-b7330f3c4dbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMG5hdHVyZSUyMGNhbG18ZW58MXx8fHwxNTc3NzMzNDZ8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 3,
    title: "Building Support Networks",
    description: "How to create and maintain healthy relationships during your academic journey.",
    type: "Video",
    duration: "8 min",
    category: "Social Support",
    image: "https://images.unsplash.com/photo-1703449481095-bb99a6928f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwY291bnNlbGluZyUyMHN1cHBvcnR8ZW58MXx8fHwxNzU3Nzc5MDYyfDA&ixlib=rb-4.1.0&q=80&w=400"
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Article':
      return <BookOpen className="h-4 w-4" />;
    case 'Video':
      return <Play className="h-4 w-4" />;
    case 'Audio':
      return <Clock className="h-4 w-4" />;
    default:
      return <BookOpen className="h-4 w-4" />;
  }
};

export function ResourceLibrary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Library</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {resources.map((resource) => (
            <div key={resource.id} className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <ImageWithFallback
                src={resource.image}
                alt={resource.title}
                className="w-full sm:w-24 h-32 sm:h-16 object-cover rounded shrink-0"
              />
              <div className="flex-1 space-y-2 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-medium leading-tight">{resource.title}</h4>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{resource.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                    {getTypeIcon(resource.type)}
                    {resource.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">{resource.category}</Badge>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{resource.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline">
            View All Resources
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
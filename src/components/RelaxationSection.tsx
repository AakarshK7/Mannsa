import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Music, 
  GamepadIcon, 
  BookOpen, 
  Play, 
  Pause, 
  Volume2,
  Smile,
  Dice6,
  Heart
} from "lucide-react";

export function RelaxationSection() {
  const [activeTab, setActiveTab] = useState('music');
  const [isPlaying, setIsPlaying] = useState(false);

  const relaxationTabs = [
    { id: 'music', label: 'Relaxing Music', icon: Music },
    { id: 'games', label: 'Fun Games', icon: GamepadIcon },
    { id: 'stories', label: 'Stories & Jokes', icon: BookOpen }
  ];

  const musicTracks = [
    { id: 1, title: "Ocean Waves", duration: "15 min", category: "Nature" },
    { id: 2, title: "Forest Rain", duration: "20 min", category: "Nature" },
    { id: 3, title: "Meditation Bells", duration: "10 min", category: "Meditation" },
    { id: 4, title: "Soft Piano", duration: "25 min", category: "Instrumental" },
    { id: 5, title: "White Noise", duration: "30 min", category: "Focus" },
    { id: 6, title: "Birds Singing", duration: "18 min", category: "Nature" }
  ];

  const games = [
    { id: 1, title: "Breathing Exercise", description: "Guided 4-7-8 breathing technique", icon: "🧘‍♀️" },
    { id: 2, title: "Color Match", description: "Calm color matching puzzle", icon: "🎨" },
    { id: 3, title: "Word Association", description: "Positive word connection game", icon: "💭" },
    { id: 4, title: "Memory Garden", description: "Plant virtual flowers by remembering sequences", icon: "🌸" },
    { id: 5, title: "Zen Drawing", description: "Create peaceful digital art", icon: "🖌️" },
    { id: 6, title: "Gratitude Game", description: "Daily gratitude challenge", icon: "✨" }
  ];

  const stories = [
    { 
      id: 1, 
      title: "The Magic Library", 
      preview: "In a small town, there was a library where books came to life at midnight...",
      type: "story",
      mood: "Wonder"
    },
    { 
      id: 2, 
      title: "Why did the student bring a ladder to school?", 
      preview: "Because they wanted to go to high school! 📚😄",
      type: "joke",
      mood: "Happy"
    },
    { 
      id: 3, 
      title: "The Peaceful Mountain", 
      preview: "A traveler discovered a mountain where time moved slowly and worries melted away...",
      type: "story",
      mood: "Calm"
    },
    { 
      id: 4, 
      title: "Study Jokes Collection", 
      preview: "Why don't scientists trust atoms? Because they make up everything! 🔬",
      type: "joke",
      mood: "Funny"
    },
    { 
      id: 5, 
      title: "The Kindness Ripple", 
      preview: "One small act of kindness started a chain reaction that changed an entire community...",
      type: "story",
      mood: "Inspiring"
    },
    { 
      id: 6, 
      title: "Campus Life Humor", 
      preview: "What's a student's favorite type of music? Anything with good notes! 🎵📝",
      type: "joke",
      mood: "Cheerful"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Relaxation Zone
        </h1>
        <p className="text-gray-600">Take a break and recharge your mind with these calming activities</p>
      </div>

      {/* Tab Navigation */}
      <Card>
        <CardHeader>
          <div className="flex flex-wrap gap-2 justify-center">
            {relaxationTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </Button>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          {/* Relaxing Music Tab */}
          {activeTab === 'music' && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="mb-2">🎵 Soothing Sounds for Focus & Relaxation</h3>
                <p className="text-gray-600">Choose from our curated collection of calming audio</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {musicTracks.map((track) => (
                  <Card key={track.id} className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-purple-400">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Volume2 className="h-4 w-4 text-purple-500" />
                          <span className="text-sm text-purple-600">{track.title}</span>
                        </div>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                          {track.category}
                        </Badge>
                        <span>{track.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Fun Games Tab */}
          {activeTab === 'games' && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="mb-2">🎮 Mindful Games & Activities</h3>
                <p className="text-gray-600">Engage in fun, stress-relieving games designed for students</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {games.map((game) => (
                  <Card key={game.id} className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-green-400">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{game.icon}</div>
                        <div className="flex-1">
                          <h4 className="mb-1">{game.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{game.description}</p>
                          <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                            <Dice6 className="h-4 w-4 mr-1" />
                            Start Game
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Stories & Jokes Tab */}
          {activeTab === 'stories' && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="mb-2">📖 Uplifting Stories & Jokes</h3>
                <p className="text-gray-600">Brighten your day with heartwarming stories and student-friendly humor</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stories.map((story) => (
                  <Card key={story.id} className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-yellow-400">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="flex-1">{story.title}</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={`text-xs ${
                            story.type === 'story' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {story.type === 'story' ? '📚 Story' : '😄 Joke'}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {story.mood}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{story.preview}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        <Heart className="h-4 w-4 mr-1" />
                        {story.type === 'story' ? 'Read Story' : 'See Joke'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
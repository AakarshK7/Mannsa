import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Quote, Sparkles, RefreshCw, Heart, Share } from "lucide-react";

interface QuoteOfTheDayProps {
  isOpen: boolean;
  onClose: () => void;
}

const inspirationalQuotes = [
  {
    text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    author: "Mental Health Advocate",
    category: "Self-Care",
    color: "from-green-400 to-emerald-500"
  },
  {
    text: "It's okay to not be okay. What's not okay is staying there.",
    author: "Anonymous",
    category: "Recovery",
    color: "from-blue-400 to-cyan-500"
  },
  {
    text: "You are stronger than you think, braver than you feel, and more loved than you know.",
    author: "Mental Health Support",
    category: "Strength",
    color: "from-purple-400 to-pink-500"
  },
  {
    text: "Healing isn't linear. Some days will be harder than others, and that's perfectly okay.",
    author: "Therapy Wisdom",
    category: "Healing",
    color: "from-orange-400 to-red-500"
  },
  {
    text: "Your current situation is not your final destination. Keep going!",
    author: "Hope Messenger",
    category: "Hope",
    color: "from-yellow-400 to-orange-500"
  },
  {
    text: "Small steps every day lead to big changes in a year. You're making progress!",
    author: "Progress Coach",
    category: "Progress",
    color: "from-teal-400 to-blue-500"
  },
  {
    text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, or frustrated.",
    author: "Emotional Wellness",
    category: "Emotions",
    color: "from-indigo-400 to-purple-500"
  },
  {
    text: "Asking for help is not a sign of weakness; it's a sign of wisdom and courage.",
    author: "Support Network",
    category: "Support",
    color: "from-pink-400 to-rose-500"
  },
  {
    text: "You are not your thoughts. You are not your feelings. You are the observer of both.",
    author: "Mindfulness Teacher",
    category: "Mindfulness",
    color: "from-green-400 to-teal-500"
  },
  {
    text: "Every day you choose to prioritize your mental health is a victory worth celebrating.",
    author: "Wellness Advocate",
    category: "Victory",
    color: "from-violet-400 to-purple-500"
  }
];

export function QuoteOfTheDay({ isOpen, onClose }: QuoteOfTheDayProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const currentQuote = inspirationalQuotes[currentQuoteIndex];

  const getNewQuote = () => {
    const newIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    setCurrentQuoteIndex(newIndex);
    setIsLiked(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Quote of the Day - Mannsa',
        text: `"${currentQuote.text}" - ${currentQuote.author}`,
      });
    } else {
      navigator.clipboard.writeText(`"${currentQuote.text}" - ${currentQuote.author}`);
      // You could add a toast notification here
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-4">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl sm:text-2xl">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
            Quote of the Day ✨
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Get inspired with daily motivational quotes for your mental health journey
          </DialogDescription>
        </DialogHeader>
        
        <Card className="border-0 shadow-none">
          <CardContent className="p-6">
            <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${currentQuote.color} text-white overflow-hidden`}>
              {/* Background decoration */}
              <div className="absolute top-4 left-4 opacity-20">
                <Quote className="h-12 w-12" />
              </div>
              <div className="absolute bottom-4 right-4 opacity-10">
                <Sparkles className="h-16 w-16" />
              </div>
              
              {/* Quote content */}
              <div className="relative z-10">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-4 sm:mb-6">
                  "{currentQuote.text}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <cite className="text-base sm:text-lg font-medium">
                      — {currentQuote.author}
                    </cite>
                    <div className="mt-2">
                      <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {currentQuote.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`transition-all duration-200 ${
                    isLiked 
                      ? "bg-gradient-to-r from-red-100 to-pink-100 border-red-300 text-red-600" 
                      : "hover:bg-red-50"
                  }`}
                >
                  <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                  <span className="hidden sm:inline">{isLiked ? "Loved!" : "Love it"}</span>
                  <span className="sm:hidden">♥</span>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="hover:bg-blue-50"
                >
                  <Share className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
              </div>
              
              <Button
                onClick={getNewQuote}
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                New Quote
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>💝 Remember: You are valued, you are enough, and you are not alone! 💝</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WelcomeBanner() {
  return (
    <Card className="mb-8 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-48 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1658881516403-7e6aa4a73b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMHBlYWNlZnVsfGVufDF8fHx8MTc1Nzg2ODk2OHww&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Mental health wellness"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 p-8 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-2">
                Welcome back, Sarah! 🌈✨
              </h2>
              <p className="text-lg text-white/90 mb-4">
                You're doing amazing! 💪 Your journey to better mental health matters, and our vibrant community is here to support you every step of the way! 🚀
              </p>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <span>🌟 7-day streak - You're on fire!</span>
                <span>💬 3 new support messages</span>
                <span>🎯 2 personalized resources</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
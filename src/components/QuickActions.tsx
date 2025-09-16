import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageCircle, BookOpen, Activity, Users } from "lucide-react";

export function QuickActions() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 flex flex-col gap-2 bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 border-blue-200">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            <span className="text-sm text-blue-700">Chat with AI 🤖</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2 bg-gradient-to-br from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 border-green-200">
            <Activity className="h-6 w-6 text-green-600" />
            <span className="text-sm text-green-700">Log Mood 😊</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2 bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 border-purple-200">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <span className="text-sm text-purple-700">Resources 📚</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2 bg-gradient-to-br from-orange-100 to-yellow-100 hover:from-orange-200 hover:to-yellow-200 border-orange-200">
            <Users className="h-6 w-6 text-orange-600" />
            <span className="text-sm text-orange-700">Community 🌟</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { TrendingUp, Trophy, Target, BookOpen, Brain, Heart } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const weeklyData = [
  { day: 'Mon', mood: 85, study: 90, wellness: 75 },
  { day: 'Tue', mood: 78, study: 85, wellness: 80 },
  { day: 'Wed', mood: 92, study: 95, wellness: 88 },
  { day: 'Thu', mood: 88, study: 88, wellness: 85 },
  { day: 'Fri', mood: 95, study: 92, wellness: 90 },
  { day: 'Sat', mood: 90, study: 80, wellness: 95 },
  { day: 'Sun', mood: 87, study: 85, wellness: 92 }
];

const progressAreas = [
  {
    title: "Study Habits",
    icon: BookOpen,
    progress: 85,
    color: "from-blue-500 to-cyan-500",
    description: "Consistent daily progress",
    achievement: "7-day streak!"
  },
  {
    title: "Mental Wellness",
    icon: Brain,
    progress: 78,
    color: "from-purple-500 to-pink-500",
    description: "Mood tracking & mindfulness",
    achievement: "Daily check-ins"
  },
  {
    title: "Social Connection",
    icon: Heart,
    progress: 92,
    color: "from-green-500 to-emerald-500",
    description: "Peer support engagement",
    achievement: "Top contributor"
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {entry.dataKey}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function StudentProgress() {
  const overallProgress = Math.round(
    progressAreas.reduce((sum, area) => sum + area.progress, 0) / progressAreas.length
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Your Progress
          </CardTitle>
          <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700">
            <Trophy className="h-3 w-3 mr-1" />
            {overallProgress}% Overall
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress Areas */}
        <div className="space-y-4">
          {progressAreas.map((area, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${area.color}`}>
                    <area.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">{area.title}</h4>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{area.progress}%</div>
                  <Badge variant="outline" className="text-xs">
                    {area.achievement}
                  </Badge>
                </div>
              </div>
              <Progress value={area.progress} className="h-2" />
            </div>
          ))}
        </div>

        {/* Weekly Overview Chart */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-blue-500" />
            <h4 className="font-medium">Weekly Overview</h4>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                  domain={[0, 100]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="mood" fill="#8b5cf6" radius={[2, 2, 0, 0]} name="Mood" />
                <Bar dataKey="study" fill="#06b6d4" radius={[2, 2, 0, 0]} name="Study" />
                <Bar dataKey="wellness" fill="#10b981" radius={[2, 2, 0, 0]} name="Wellness" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span>Mood</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-500 rounded"></div>
              <span>Study</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded"></div>
              <span>Wellness</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="h-4 w-4 text-yellow-600" />
            <h4 className="font-medium text-yellow-800">Recent Achievements</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2 text-yellow-700">
              🎯 <span>Completed weekly goals</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-700">
              🌟 <span>5 mindfulness sessions</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-700">
              💬 <span>Active in community</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-700">
              📚 <span>Daily study habit</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
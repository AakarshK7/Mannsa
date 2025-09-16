import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Send, Users, Heart, Brain, Book, Coffee, Smile } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: string;
  senderAvatar: string;
  timestamp: Date;
  reactions?: string[];
}

interface SupportGroup {
  id: string;
  name: string;
  topic: string;
  memberCount: number;
  icon: React.ReactNode;
  color: string;
  lastMessage: string;
  unreadCount: number;
}

const supportGroups: SupportGroup[] = [
  {
    id: '1',
    name: 'Exam Stress Warriors',
    topic: 'exam-stress',
    memberCount: 24,
    icon: <Brain className="h-4 w-4" />,
    color: 'bg-gradient-to-r from-purple-400 to-pink-400',
    lastMessage: 'You got this! Just finished my calculus exam 💪',
    unreadCount: 3
  },
  {
    id: '2',
    name: 'Mindful Students',
    topic: 'mindfulness',
    memberCount: 18,
    icon: <Heart className="h-4 w-4" />,
    color: 'bg-gradient-to-r from-green-400 to-blue-400',
    lastMessage: 'Starting a meditation session in 10 mins!',
    unreadCount: 1
  },
  {
    id: '3',
    name: 'Study Buddies',
    topic: 'study-help',
    memberCount: 31,
    icon: <Book className="h-4 w-4" />,
    color: 'bg-gradient-to-r from-yellow-400 to-orange-400',
    lastMessage: 'Anyone want to study together this evening?',
    unreadCount: 0
  },
  {
    id: '4',
    name: 'Coffee & Chats',
    topic: 'social',
    memberCount: 42,
    icon: <Coffee className="h-4 w-4" />,
    color: 'bg-gradient-to-r from-pink-400 to-red-400',
    lastMessage: 'Meet at the library café at 3pm! ☕',
    unreadCount: 5
  }
];

const sampleMessages: Message[] = [
  {
    id: '1',
    content: "Hey everyone! Just wanted to share that I aced my physics exam today! 🎉 All those study sessions really paid off!",
    sender: "Alex M.",
    senderAvatar: "",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    reactions: ['🎉', '💪', '❤️']
  },
  {
    id: '2',
    content: "That's amazing Alex! Your dedication is so inspiring. I have my chemistry exam tomorrow and feeling a bit nervous 😅",
    sender: "Sam K.",
    senderAvatar: "",
    timestamp: new Date(Date.now() - 1000 * 60 * 10),
    reactions: ['💪']
  },
  {
    id: '3',
    content: "You've got this Sam! Remember to take deep breaths and trust your preparation. We're all rooting for you! 🌟",
    sender: "Maya L.",
    senderAvatar: "",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    reactions: ['❤️', '🌟']
  }
];

export function PeerChat() {
  const [selectedGroup, setSelectedGroup] = useState(supportGroups[0]);
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "You",
      senderAvatar: "",
      timestamp: new Date(),
      reactions: []
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Peer Support Community
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        <Tabs defaultValue="groups" className="flex-1 flex flex-col">
          <TabsList className="mx-6 mb-4">
            <TabsTrigger value="groups">Support Groups</TabsTrigger>
            <TabsTrigger value="chat">Group Chat</TabsTrigger>
          </TabsList>
          
          <TabsContent value="groups" className="flex-1 mx-6 mb-6">
            <ScrollArea className="h-[400px]">
              <div className="space-y-3">
                {supportGroups.map((group) => (
                  <div
                    key={group.id}
                    className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedGroup(group)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-full ${group.color} flex items-center justify-center text-white`}>
                        {group.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium truncate">{group.name}</h4>
                          {group.unreadCount > 0 && (
                            <Badge variant="default" className="bg-gradient-to-r from-pink-500 to-purple-500">
                              {group.unreadCount}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate mb-2">
                          {group.lastMessage}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {group.memberCount} members
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {group.topic}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="chat" className="flex-1 flex flex-col">
            <div className="px-6 mb-4">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className={`w-10 h-10 rounded-full ${selectedGroup.color} flex items-center justify-center text-white`}>
                  {selectedGroup.icon}
                </div>
                <div>
                  <h3 className="font-medium">{selectedGroup.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedGroup.memberCount} active members
                  </p>
                </div>
              </div>
            </div>
            
            <ScrollArea className="flex-1 px-6">
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={message.senderAvatar} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-400 to-purple-400 text-white">
                        {message.sender.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{message.sender}</span>
                        <span className="text-xs text-muted-foreground">
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-2">
                        <p className="text-sm">{message.content}</p>
                      </div>
                      {message.reactions && message.reactions.length > 0 && (
                        <div className="flex gap-1">
                          {message.reactions.map((reaction, index) => (
                            <Button
                              key={index}
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2 text-xs bg-gradient-to-r from-yellow-100 to-orange-100"
                            >
                              {reaction}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-6 border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Share your thoughts with the group..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="bg-gradient-to-r from-blue-50 to-purple-50"
                />
                <Button onClick={handleSend} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Send className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="bg-gradient-to-r from-yellow-100 to-orange-100">
                  <Smile className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
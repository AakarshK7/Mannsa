import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Home, 
  MessageCircle, 
  Users, 
  BookOpen, 
  Activity,
  Quote
} from "lucide-react";

interface NavigationProps {
  onQuoteClick: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ onQuoteClick, currentPage, onPageChange }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'ai-chat', label: 'AI Assistant', icon: MessageCircle },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'relaxation', label: 'Relaxation', icon: Activity },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-purple-200 px-4 sm:px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onPageChange(item.id)}
              className={`flex items-center gap-1 sm:gap-2 transition-all duration-200 shrink-0 ${
                currentPage === item.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span className="hidden sm:inline text-sm">{item.label}</span>
              {item.id === 'community' && (
                <Badge variant="secondary" className="ml-1 bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs">
                  5
                </Badge>
              )}
              {item.id === 'ai-chat' && (
                <Badge variant="secondary" className="ml-1 bg-gradient-to-r from-green-400 to-blue-400 text-white text-xs">
                  2
                </Badge>
              )}
            </Button>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onQuoteClick}
          className="bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300 text-orange-700 hover:from-yellow-200 hover:to-orange-200 hover:border-orange-400 transition-all duration-200 shadow-md shrink-0 ml-2"
        >
          <Quote className="h-4 w-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline text-sm">Quote of the Day</span>
          <span className="sm:hidden text-xs">Quote</span> ✨
        </Button>
      </div>
    </nav>
  );
}
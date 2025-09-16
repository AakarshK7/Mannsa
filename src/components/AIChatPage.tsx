import { AIChat } from "./AIChat";

export function AIChatPage() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          AI Mental Health Assistant
        </h1>
        <p className="text-gray-600">Your personal AI companion for mental health support and guidance</p>
      </div>
      
      <AIChat />
    </div>
  );
}
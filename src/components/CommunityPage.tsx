import { PeerChat } from "./PeerChat";

export function CommunityPage() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Student Community
        </h1>
        <p className="text-gray-600">Connect with fellow students, share experiences, and support each other</p>
      </div>
      
      <PeerChat />
    </div>
  );
}
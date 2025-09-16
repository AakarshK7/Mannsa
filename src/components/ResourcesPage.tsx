import { ResourceLibrary } from "./ResourceLibrary";

export function ResourcesPage() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Mental Health Resources
        </h1>
        <p className="text-gray-600">Curated resources, articles, and tools to support your mental wellbeing</p>
      </div>
      
      <ResourceLibrary />
    </div>
  );
}
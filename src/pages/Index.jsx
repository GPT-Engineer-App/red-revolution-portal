// Update this page (the content is just a fallback if you fail to update the page)

import { Hammer, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-red-700">
      <header className="bg-red-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Hammer className="h-8 w-8 text-yellow-400 mr-2" />
          <h1 className="text-2xl font-bold text-yellow-400">PEOPLE.GOV</h1>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="text-yellow-400 border-yellow-400">Five-Year Plan</Button>
          <Button variant="outline" className="text-yellow-400 border-yellow-400">Collective Farms</Button>
          <Button variant="outline" className="text-yellow-400 border-yellow-400">Party News</Button>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-red-600 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4 flex items-center">
            <Star className="h-8 w-8 mr-2" />
            Statement from Comrade General Secretary on the Triumph of the People's Act
          </h2>
          <p className="text-white text-lg mb-4">
            Comrades, today we celebrate the second anniversary of the glorious People's Act for Collective Triumph (PACT). This revolutionary legislation has brought unprecedented prosperity to our workers and farmers...
          </p>
          <img src="/placeholder.svg" alt="Comrade General Secretary with workers" className="mx-auto object-cover w-full h-64 mb-4" />
          <Button className="bg-yellow-400 text-red-800 hover:bg-yellow-500">Read Full Statement</Button>
        </div>
      </main>
      
      <footer className="bg-red-800 p-4 text-center text-yellow-400">
        <p>© 2024 People's Republic. All rights collectively owned.</p>
      </footer>
    </div>
  );
};

export default Index;

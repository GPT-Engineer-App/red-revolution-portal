import { Home, Star, Users, Book, Briefcase } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Party Doctrine",
    to: "/doctrine",
    icon: <Star className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Collective Achievements",
    to: "/achievements",
    icon: <Users className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Revolutionary Education",
    to: "/education",
    icon: <Book className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Labor Initiatives",
    to: "/labor",
    icon: <Briefcase className="h-4 w-4" />,
    page: <Index />,
  },
];

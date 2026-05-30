import { createBrowserRouter } from "react-router";
import Home from '@/pages/home/Home';
import Root from '@/pages/Root'
import Dashboard from '@/pages/dashboard/Dashboard';
import Settings from "@/components/settings";
import Stats from "@/components/stats";
import ExercisePage from "@/pages/exercise/exercise";
import Exercise from "@/components/exercise";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      const res = await fetch('http://localhost:3000/user')
      const data = await res.json();
      return { user: data}
    },
    Component: Root,
    children: [
      { index: true, Component: Home },
      { 
        path: "dashboard", 
        loader: async () => {
          const res = await fetch('http://localhost:3000/cards')
          const data = await res.json()
          return { cards: data}
        },
        Component: Dashboard 
      },
      {
        path: "settings",
        Component: Settings,
      },
      {
        path: "statistics",
        Component: Stats,
      },
      {
        path: "exercise",
        children: [
          { index: true, Component: ExercisePage },
          // { path: ":city", Component: ConcertsCity },
          { path: "coldplunge", Component: Exercise },
        ],
      },
    ],
  },
]);

export default router
import { createBrowserRouter } from "react-router";
import Home from '@/pages/home/Home';
import Root from '@/pages/Root'
import Dashboard from '@/pages/dashboard/Dashboard';
import Settings from "@/components/settings";
import Stats from "@/components/stats";

const router = createBrowserRouter([
  {
    path: "/",
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
      // {
      //   path: "concerts",
      //   children: [
      //     { index: true, Component: ConcertsHome },
      //     { path: ":city", Component: ConcertsCity },
      //     { path: "trending", Component: ConcertsTrending },
      //   ],
      // },
    ],
  },
]);

export default router
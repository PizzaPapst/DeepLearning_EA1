import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { TooltipProvider } from "@/components/ui/tooltip"
import { Classification } from './pages/Classification'
import { Discussion } from './pages/Discussion'
import { Documentation } from './pages/Documentation'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Classification />,
      },
      {
        path: 'discussion',
        element: <Discussion />,
      },
      {
        path: 'documentation',
        element: <Documentation />,
      },
    ],
  },
])

function App() {
  return (
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
  )
}

export default App

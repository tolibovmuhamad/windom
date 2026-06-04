import { createBrowserRouter, RouterProvider } from "react-router"
import Layot from "./Components/Layot"
import { Dva, Home, Ipoteka, Isclub, Izumrudniy, Komanda, Konstantinovka, Kontakt, Notfound, Novosti, Odno, SDoma, Smi, SmiStatyaPage, Statya, Tanxaus, Usadi, Vsedoma, Zimniy } from "./router"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layot />, 
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "contacts",
          element: <Kontakt />
        },
        {
          path: "novosti",
          element: <Novosti />
        },
        {
          path: "novosti/:id",
          element: <Statya />
        },
        {
          path: "smi",
          element: <Smi />
        },
        {
          path: "smi/:id",
          element: <SmiStatyaPage />
        },
        {
          path: "komanda",
          element: <Komanda />
        },
        {
          path: "ipoteka",
          element: <Ipoteka />
        },
        {
          path: "izumrudniy",
          element: <Izumrudniy />
        },
        {
          path: "iqclub",
          element: <Isclub  />
        },
        {
          path: "usadi",
          element: <Usadi />
        },
        {
          path: "zimniy",
          element: <Zimniy />
        },
        {
          path: "konstantinovka",
          element: <Konstantinovka />
        },
        {
          path: "odno",
          element: <Odno />
        },
        {
          path: "dva",
          element: <Dva />
        },
        {
          path: "tanxaus",
          element: <Tanxaus />
        },
        {
          path: "vsedoma",
          element: <Vsedoma />
        },
        {
          path: "vsedoma/:id",
          element: <SDoma />
        }
      ]
    },
    {
      path: "*",
      element: <Notfound />
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

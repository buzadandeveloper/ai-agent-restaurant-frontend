import { AppProvider } from "@/app/provider";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;

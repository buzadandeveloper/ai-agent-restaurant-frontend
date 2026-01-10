import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { AppProvider } from "@/app/provider";
import { router } from "@/app/router";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" expand visibleToasts={1} />
    </AppProvider>
  );
}

export default App;

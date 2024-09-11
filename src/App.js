import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FullLayout from "./layouts/FullLayout";
import Starter from "./pages/Starter";
import Services from "./pages/Services";
import Industry from "./pages/Industry";
import Technologies from "./pages/Technologies";
import Clients from "./pages/Clients";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:0 , //1 min
    },
  },
});
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<FullLayout />}>
              <Route index element={<Navigate replace to="starter" />} />
              <Route path="starter" element={<Starter />} />
              <Route path="services" element={<Services />} />
              <Route path="industries" element={<Industry />} />
              <Route path="technologies" element={<Technologies />} />
              <Route path="services" element={<Services/>} />
              <Route path="ourClintes" element={<Clients/>} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" gutter={12} 
        containerStyle={{margin:"8px"}} toastOptions={{
          success:{
            duration:3000
          },
          error:{
            duration:5000
          },
          style:{
            fontSize:"16px",
            maxWidth:"500px",
            padding:"16px 24px",
            backgroundColor:"#fff",
            color:"#374151"
          }
        }}/>
      </QueryClientProvider>
    </div>
  );
}

export default App;

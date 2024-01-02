import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" exact element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="products" element={<Products />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      {/* 
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

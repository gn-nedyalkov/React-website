import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
import { Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, {jobLoader} from "./pages/JobPage";


const router = createBrowserRouter([
  { path: "/", element: <MainLayout/>, children: [
    {
      path: "",
      element: <HomePage />
    },
    {
      path: "jobs",
      element: <JobsPage />
    },
    {
      path: "jobs/:id",
      element: <JobPage />,
      loader: jobLoader
    },
    {
      path: "*",
      element: <NotFoundPage />
    } 
  ]
   }
]);



const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

// const App = () => {


//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <HomeCards />
//       <JobListings />
//       <ViewAllJobs />
//     </div>
//   );
// };

export default App;


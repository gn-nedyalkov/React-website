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
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const addJob = async (newJob) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newJob)
    })
    return;
}

const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
    })
    return;
}

const updateJob = async (UpdatedJob) => {
  const res = await fetch(`/api/jobs/${UpdatedJob.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(UpdatedJob)
    })
    return;
}


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
      element: <JobPage deleteJob={deleteJob} />,
      loader: jobLoader
    },
    {
      path: "add-job",
      element: <AddJobPage addJobSubmit={addJob} />
    },
    {
      path: "edit-job/:id",
      element: <EditJobPage UpdateJobSubmit={updateJob}/>,
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


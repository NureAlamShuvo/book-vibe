import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/books',
        element: <Books />
      }
    ],
    errorElement : <ErrorPage />
  }
])

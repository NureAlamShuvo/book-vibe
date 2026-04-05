import { createBrowserRouter } from "react-router";
import MainLayout from "../assets/layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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

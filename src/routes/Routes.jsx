import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: '/books',
        Component: Books
      },
      {
        path: '/bookDetails/:id',
        Component: BookDetails,
        loader: ()=> fetch('/booksData.json')
      }
    ],
    errorElement : <ErrorPage />
  }
])

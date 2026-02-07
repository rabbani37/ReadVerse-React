import { createBrowserRouter } from "react-router";
import Root from "../component/Root/Root";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks.jsx";
import PagesToRead from "../Pages/PagesToRead/PagesToRead.jsx";
import BookDetails from "../component/BookDetails/BookDetails.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/listedBooks",
                element:<ListedBooks></ListedBooks>
            },
            {
                path:"/pagesToRead",
                element:<PagesToRead></PagesToRead>
            },
            {
                path:"/bookDetails/:bookID",
                element:<BookDetails></BookDetails>
            }
        ]
    },
]);

export default router;
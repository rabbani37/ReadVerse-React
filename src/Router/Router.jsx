import { createBrowserRouter } from "react-router";
import Root from "../component/Root/Root";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks.jsx";



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
            }
        ]
    },
]);

export default router;
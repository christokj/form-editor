import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { ErrorPage } from "../pages/ErrorPage";
// import LoginPage from "../pages/User/LoginPage";
// import SignupPage from "../pages/User/SignupPage";
// import { UserLayout } from "../layouts/UserLayout";
// import SuccessPage from "../pages/Orders/SuccessPage";
import ScrollToTop from "../components/ui/ScrollToTop";
import HomePage from "../pages/HomePage";
import CreateForm from "../pages/CreateForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ScrollToTop>
                <RootLayout />
            </ScrollToTop>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "create",
                element: <CreateForm />,
            }
            // {
            //     path: "login",
            //     element: <LoginPage />,
            // },
            // {
            //     path: "signup",
            //     element: <SignupPage />,
            // },
            
        ],
    },
    // {
    //     path: "user",
    //     element: (
    //         <UserAuth>
    //             <ScrollToTop>
    //                 <UserLayout />
    //             </ScrollToTop>
    //         </UserAuth>
    //     ),
    //     children: [
    //         {
    //             path: "",
    //             element: <HomePage />,
    //         },
           
    //     ],
    // },
])
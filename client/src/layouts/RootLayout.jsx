import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export const RootLayout = () => {
    return (
        <>
            <Header />
            <div className="min-h-96">
                <Outlet />
            </div>
        </>
    );
};

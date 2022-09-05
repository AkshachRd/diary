import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Diary = lazy(() => import("./diary"));
const Record = lazy(() => import("./record"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Diary />} />
            <Route path="/record/:id" element={<Record />} />
        </Routes>
    );
};

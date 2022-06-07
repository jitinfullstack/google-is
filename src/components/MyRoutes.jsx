import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Results from "./Results";

const MyRoutes = () => {
  return (
    <div className="p-4">
        <Routes>
            {/* <Route exact path="/">
                <Navigate to="/search" />
            </Route> */}
            <Route exact path="/" caseSensitive={true} element={<Navigate replace to="/search" />} />
            {/* <Route exact path={['/search', '/images', '/news', '/videos']} caseSensitive={true} element={<Results />} /> */}
            <Route exact path="/search" caseSensitive={true} element={<Results />} />
            <Route exact path="/image" caseSensitive={true} element={<Results />} />
            <Route exact path="/news" caseSensitive={true} element={<Results />} />
            <Route exact path="/video" caseSensitive={true} element={<Results />} />
        </Routes>
    </div>
  )
}

export default MyRoutes
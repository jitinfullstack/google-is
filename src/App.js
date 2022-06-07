import React, { useState } from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyRoutes from "./components/MyRoutes";

function App() {
    const [ darkTheme, setDarkTheme ] = useState(false);
    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 min-h-screen">
                <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
                <MyRoutes />
                <Footer />
            </div>
        </div>
    );
}

export default App;

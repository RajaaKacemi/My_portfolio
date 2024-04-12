import { useState } from 'react';

function NotFound({ isDarkMode }) {
    return (
        <>
            <div className={`m-auto px-12 py-36 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <h1 className="sm:text-8xl text-4xl font-bold">404 Page Not Found</h1>
            </div>
        </>
    );
}

export default NotFound;

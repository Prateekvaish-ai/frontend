import React from 'react';

const NotFound = () => {
    return (
        <div className="h-screen bg-gray-200 flex justify-center items-center">
            <div className="text-center space-y-5">
                <h1 className="text-9xl font-bold">404</h1>
                <h2 className="text-3xl font-bold">Page Not Found</h2>
                <button className="rounded-lg py-2 px-4 bg-black text-white">
                    Back to HomePage
                </button>
            </div>
        </div>
    )
}


export default NotFound;
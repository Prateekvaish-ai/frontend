
import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className="border-2 rounded-lg p-6 bg-white space-y-5">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
            <div className="flex gap-4">
                <button className="bg-black text-white py-1 px-2 rounded-lg">Primary Button</button>
                <button className="border py-1 px-2 rounded-lg">Secondary Button</button>
            </div>
        </div>
    )
}

export default Card;

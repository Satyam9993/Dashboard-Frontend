import React from 'react';
import Section1Left from './Section1Left';
import Section1Right from './Section1Right';

const Section1 = () => {
    return (
        <>
            <div className="w-full text-gray-100 bg-gray-900 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                
                <Section1Left />

                <Section1Right />
            </div>
        </>
    )
}

export default Section1;

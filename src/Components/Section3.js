import React from 'react'
import Section3Right from './Section3Right';
import Section3Left from './Section3Left';

const Section3 = () => {
    return (
        <>
            <div className="text-gray-100 bg-gray-900 grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                <Section3Left />
                <Section3Right />
            </div>
        </>
    )
}

export default Section3;

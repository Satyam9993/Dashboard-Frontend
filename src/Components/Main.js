import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const Main = () => {
    return (
        <>
            <div id="main-content" className="h-full w-full text-gray-100 bg-gray-900 relative overflow-y-auto lg:ml-64">
                <main>
                    <div className="pt-6 px-4 text-gray-100 bg-gray-900">
                        
                        <Section1 />

                        <Section2 />
                        
                        <Section3 />

                    </div>
                </main>
            </div>
        </>
    )
}

export default Main

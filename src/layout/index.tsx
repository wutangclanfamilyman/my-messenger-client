import React from 'react';
import {Outlet} from 'react-router-dom';

const DefaultLayout: React.FC = () => {
    return (
        <main className="main">
            <div className='container'>
                <Outlet />
            </div>
        </main>
    )
}

export default DefaultLayout;
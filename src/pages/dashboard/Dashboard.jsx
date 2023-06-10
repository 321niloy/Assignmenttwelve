import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            <div className='bg-indigo-700 text-white p-10 text-xl'>
                <Sidebar/>
            </div>
            <div className='flex-1 md:ml-64'>
            <div className='p-5'>
             <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;
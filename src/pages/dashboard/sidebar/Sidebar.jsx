import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <h1 className='text-2xl text-white font-extrabold'>DashBoard</h1>
            <li><Link to="/dashboard/selactedclass" className='text-white'>Classes</Link></li>
            <li><Link to="/dashboard/Addclasses" className='text-white'>Add Class</Link></li>
            <li><Link to="/dashboard/manrageuse" className='text-white'>Manage Classes</Link></li>
        </div>
    );
};

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            tyenaki
            <li><Link to="/dashboard/selactedclass" className='text-white'>Classes</Link></li>
        </div>
    );
};

export default Sidebar;
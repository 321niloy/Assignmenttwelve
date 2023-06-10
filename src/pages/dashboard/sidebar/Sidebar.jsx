import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            tyenaki
            <li><Link to="/dashboard/selactedclass" className='text-white'>Classes</Link></li>
            <li><Link to="/dashboard/Addclasses" className='text-white'>Add Class</Link></li>
        </div>
    );
};

export default Sidebar;
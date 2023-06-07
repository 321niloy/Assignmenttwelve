import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
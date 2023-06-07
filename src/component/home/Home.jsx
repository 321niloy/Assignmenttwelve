import React from 'react';
import useTitle from '../../hook/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <p>THIS IS hoME</p>
        </div>
    );
};

export default Home;
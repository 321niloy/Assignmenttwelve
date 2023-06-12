import React from 'react';
import useTitle from '../../hook/useTitle';
import Slider from '../slider/Slider';
import Populerclass from '../Populerclass/Populerclass';
import Extrasection from '../extrasection/Extrasection';
import Populerinstructor from '../../pages/populerinstruction/Populerinstructor';

const Home = () => {
    useTitle('Home')
    return (
      <>
     <div className='text-center'>
     <h1   className='text-3xl text-blue-800 mt-5'>This is home</h1>
      <h2 className='text-2xl text-blue-600 mt-5'>You Can see Hare all Homepages Component</h2>
      <h2 className='text-2xl text-blue-400 mt-6'>But If you signIn this website you can see extra features and enroll any course</h2>
     </div>
      
      <div className='mt-4'>
            <Slider></Slider>
            <Populerclass></Populerclass>
            <Populerinstructor></Populerinstructor>
            <Extrasection></Extrasection>
        </div>
      </>
    );
};

export default Home;
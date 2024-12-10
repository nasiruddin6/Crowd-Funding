import React from 'react';
import { Link } from 'react-router-dom';
import errorIcons from '../assets/error.json';
import Lottie from 'lottie-react';

const ErrorElement = () => {
    return (
        <div className='bg-slate-400 h-[660px]'>
            <div className='text-center pt-16 justify-center space-y-3'>
                <h1 className='text-6xl font-bold pb-5'>Oops!... <span className='text-red-500'>404</span></h1>
                {/* Lottie Animation */}
                <div>
                    <Lottie
                        animationData={errorIcons}
                        loop={true} 
                        style={{ height: "300px", width: "300px", margin: "0 auto" }}
                    />
                </div>
                <h3 className='text-2xl font-bold'>Page not found</h3>
                <p className='font-semibold'>Sorry, the page you are looking for does not exist.</p>
                <Link to='/' className='btn'>Go home</Link>
            </div>
        </div>
    );
};

export default ErrorElement;

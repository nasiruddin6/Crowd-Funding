import React from 'react';
import donate from '../assets/donateicon.png'
import banImg from '../assets/campaign.png'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Banner = () => {
    return (
        <div className=''>
            <div className='bg-green-600'>
                <div className='w-11/12 mx-auto'>
                    <div className='flex justify-between mx-auto'>
                        <div className='gap-6 pt-8 px-3 space-y-4'>
                            <h2 className='font-semibold text-white'>OUR MISSION</h2>
                            <h3 className='text-4xl font-bold text-white'>Help the people, <br /> make big changes <br /> and help this world.</h3>
                            <p className='text-gray-200'>
                                One of the significant advantages of thermal <br /> clothing is the comfort it provides in cold weather <br />
                                conditions. The insulating properties of these <br /> garments help to regulate your body temperature, <br /> keeping you cozy and comfortable even in extremely low</p>
                            <Link to={'/addCampaign'}><button className='btn mt-3'>Get Started</button></Link>
                        </div>
                        <div className='hidden md:flex lg:flex'>
                            <img className='w-[356px] ' src={banImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="carousel  w-full h-[450px]">
                <div id="slide1" className="carousel-item relative w-full bg-purple-400">
                    <div className='flex flex-col md:flex-row items-center justify-center  gap-10'>
                        <div className='ml-5 mt-5'>
                            <img
                                src="https://i.ibb.co.com/jrDTPYb/phr-1.jpg"
                                className="w-[400px] rounded-3xl pt-16" />
                        </div>
                        <div className='w-[700px] text-start space-y-4 mt-20'>
                            <h2 className='text-4xl font-bold text-gray-700'>One Fund, Many Dreams</h2>
                            <h3 className='text-xl font-semibold'>Description:</h3>
                            <p>"Let’s make the world better, one idea at a time. By joining this crowdfunding journey, you’re not just donating money; you’re inspiring innovation and creating impact where it’s needed most."</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full bg-purple-400">

                    <div className='flex gap-10 ml-28'>
                        <div className='ml-5 mt-5'>
                            <img
                                src="https://i.ibb.co.com/zGSCmkd/images-1.jpg"
                                className="w-[400px] rounded-3xl pt-16" />
                        </div>
                        <div className='w-[700px] text-start space-y-4 mt-20'>
                            <h2 className='text-4xl font-bold text-gray-700'>"Help Heal Lives: Support Medical Crowdfunding"</h2>
                            <h3 className='text-xl font-semibold'>Description:</h3>
                            <p>"Join hands to ease the burden of medical expenses. Every contribution brings hope, healing, and brighter futures for patients."</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full bg-purple-400">
                    <div className='flex gap-10 ml-28'>
                        <div className='ml-5 mt-5'>
                            <img
                                src="https://i.ibb.co.com/f4VM8Cv/images-2.jpg"
                                className="w-[400px] rounded-3xl pt-16" />
                        </div>
                        <div className='w-[700px] text-start space-y-4 mt-20'>
                            <h2 className='text-4xl font-bold text-gray-700'>Together for Better Care: Support Hospitalizations"</h2>
                            <h3 className='text-xl font-semibold'>Description:</h3>
                            <p>"Your generosity can save lives. Help families cover hospitalization costs and ensure access to essential treatments and care during challenging times. Every donation matters."</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full bg-purple-400">

                    <div className='flex gap-10 ml-28'>
                        <div className='ml-5 mt-5'>
                            <img
                                src="https://i.ibb.co.com/pPgY0qn/images-3.jpg"
                                className="w-[400px] rounded-3xl pt-16" />
                        </div>
                        <div className='w-[700px] text-start space-y-4 mt-20'>
                            <h2 className='text-4xl font-bold text-gray-700'>"Fuel Dreams: Support Small Businesses</h2>
                            <h3 className='text-xl font-semibold'>Description:</h3>
                            <p>"Empower entrepreneurs to grow their ventures. Your support helps create jobs, drive innovation, and build stronger communities through thriving small businesses.</p>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* start */}

            <div className=' bg-green-300  pl-10 pt-2 h-[400px]'>
                <div className='w-11/12 mx-auto flex justify-between'>
                    <div>
                        <div className='text-center w-[400px] space-y-5 mt-10'>
                            <h2 className='text-2xl text-green-500 font-semibold'>Charity Fundraising and Personal Fundraising</h2>
                            <h1 className='text-4xl font-bold'>Start A Fundraiser</h1>
                            <p className='text-gray-500 '>WhyDonate makes online fundraising easy and accessible for charities and individuals around the world. <br /> 0% platform fees, so let’s get started.</p>
                            <div>
                                <Link to={'/addCampaign'}> <button className='btn'>Start a Campaign</button></Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img
                            className='w-[400px] h-[350px]'
                            src={donate} alt="" />
                    </div>
                </div>
            </div>


            <Marquee speed={100} pauseOnHover>
                {/* one data */}
                <div className='flex flex-col md:flex-row items-center bg-yellow-100   gap-10'>
                    <div className='ml-5 mt-5'>
                        <img
                            src="https://i.ibb.co.com/PGSbsB2/data1-1.png"
                            className="w-[400px] h-[350px]   rounded-3xl pt-16" />
                    </div>
                    <div className='w-[700px] text-start space-y-4 mt-20'>
                        <h2 className='text-4xl font-bold text-gray-700'>Winter Warmth Drive</h2>
                        <h3 className='text-2xl font-semibold'>Deadline: December 20, 2024</h3>
                        <h2 className='text-lg font-semibold'> Interested in supporting underprivileged and cold-affected individuals.</h2>
                        <p>This project aims to provide blankets, warm clothes, and food to those suffering from extreme cold. Your donations can help bring warmth to their lives this winter.</p>
                    </div>
                </div>
                {/* data 2 */}
                <div className='flex flex-col md:flex-row items-center justify-center bg-yellow-100  gap-10'>
                    <div className='ml-5 mt-5'>
                        <img
                            src="https://i.ibb.co.com/5LQY1PP/data2.jpg"
                            className="w-[400px] h-[350px]  rounded-3xl pt-16" />
                    </div>
                    <div className='w-[700px] text-start space-y-4 mt-20'>
                        <h2 className='text-4xl font-bold text-gray-700'>Education for Every Child</h2>
                        <h3 className='text-2xl font-semibold'>Deadline:  January 31, 2025</h3>
                        <h2 className='text-lg font-semibold'>Willing to support education for underprivileged children </h2>
                        <p>The purpose of this project is to distribute free books and school supplies to children in remote areas.</p>
                    </div>
                </div>
                {/* data 3 */}
                <div className='flex flex-col md:flex-row items-center justify-center bg-yellow-100  gap-10'>
                    <div className='ml-5 mt-5'>
                        <img
                            src="https://i.ibb.co.com/R79wrdH/data3.jpg"
                            className="w-[400px] h-[350px]  rounded-3xl pt-16" />
                    </div>
                    <div className='w-[700px] text-start space-y-4 mt-20'>
                        <h2 className='text-4xl font-bold text-gray-700'> Healthcare for All</h2>
                        <h3 className='text-2xl font-semibold'>Deadline:  January 15, 2025</h3>
                        <h2 className='text-lg font-semibold'>interested in promoting healthcare services. </h2>
                        <p>We are organizing free medical camps to expand access to healthcare. Your contributions are needed to make this initiative successful.</p>
                    </div>
                </div>
                {/* data 4 */}
                <div className='flex flex-col md:flex-row items-center justify-center bg-yellow-100  gap-10'>
                    <div className='ml-5 mt-5'>
                        <img
                            src="https://i.ibb.co.com/QNMpX0P/data4.jpg"
                            className="w-[400px] h-[350px]  rounded-3xl pt-16" />
                    </div>
                    <div className='w-[700px] text-start space-y-4 mt-20'>
                        <h2 className='text-4xl font-bold text-gray-700'>Clean Water Initiative</h2>
                        <h3 className='text-2xl font-semibold'>Deadline:  February 1, 2025</h3>
                        <h2 className='text-lg font-semibold'>Keen to provide access to clean drinking water </h2>
                        <p>This project aims to install tube wells and water filters to ensure every family has access to clean water.</p>
                    </div>
                </div>
                {/* data 5 */}
                <div className='flex flex-col md:flex-row items-center justify-center bg-yellow-100  gap-10'>
                    <div className='ml-5 mt-5'>
                        <img
                            src="https://i.ibb.co.com/Q9DPBdN/data5.jpg"
                            className="w-[400px] h-[350px]  rounded-3xl pt-16" />
                    </div>
                    <div className='w-[700px] text-start space-y-4 mt-20'>
                        <h2 className='text-4xl font-bold text-gray-700'> Save the Stray Animals</h2>
                        <h3 className='text-2xl font-semibold'>Deadline:  February 10, 2025</h3>
                        <h2 className='text-lg font-semibold'> Passionate about animal welfare. </h2>
                        <p>We are raising funds to provide food and medical care for stray animals on the streets.</p>
                    </div>
                </div>
                {/* data 6 */}
                <div className='flex flex-col md:flex-row items-center justify-center bg-yellow-100  gap-10'>
                    <div className='ml-5 mt-5'>
                        <img
                            src="https://i.ibb.co.com/8NzQD9p/data6.jpg"
                            className="w-[400px] h-[350px]  rounded-3xl pt-16" />
                    </div>
                    <div className='w-[700px] text-start space-y-4 mt-20'>
                        <h2 className='text-4xl font-bold text-gray-700'>Support for Natural Disaster Victims</h2>
                        <h3 className='text-2xl font-semibold'>Deadline: December 30, 2024</h3>
                        <h2 className='text-lg font-semibold'>  Interested in helping victims of natural disasters.</h2>
                        <p>This initiative focuses on providing shelter, food, and clothing to families affected by recent natural disasters.</p>
                    </div>
                </div>


            </Marquee>

        </div>
    );
};

export default Banner;
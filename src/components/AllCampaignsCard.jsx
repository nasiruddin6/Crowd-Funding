import React from 'react';
import { BiSolidCategory } from 'react-icons/bi';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
// import { HiDocumentCurrencyDollar } from 'react-icons/hi2';
import { MdDateRange, MdMarkEmailUnread, MdOutlineSubtitles } from 'react-icons/md';

const AllCampaignsCard = ({ addCampaign }) => {

    const { _id, name, title, photo, type, description, amount, date, email } = addCampaign;

    return (
        <div>
            <div className="card bg-base-100 w-full h-[500px] px-2 py-2 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={photo}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-start text-start jus">
                    <h2 className="card-title"> <FaUserTie /><span className='font-bold'>Name:</span>  {name}</h2>
                    <h2 className="flex items-center"> <MdOutlineSubtitles /> <span className='font-bold'>Title:</span> {title}</h2>
                    <p className='flex items-center'> <BiSolidCategory /> <span className='font-bold'>Type:</span>  {type}</p>
                    <p className='flex items-center'><MdDateRange /><span className='font-bold'>Date:</span> {date}</p>
                    <p className='flex items-center'> <BsFillCalendarDateFill /> <span className='font-bold'>Date:</span> {amount}</p>
                    <p className='flex items-center'><MdMarkEmailUnread /><span className='font-bold'>Email:</span>  {email}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCampaignsCard;
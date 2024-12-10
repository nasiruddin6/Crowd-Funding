import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { HiDocumentCurrencyDollar } from 'react-icons/hi2';
import { MdDateRange, MdMarkEmailUnread } from 'react-icons/md';


const DateLineCampaignCard = ({ datelineCampaigns }) => {

    const { _id, name, title, photo, type, description, amount, date, email } = datelineCampaigns;
    return (
        <div>

            <div className='flex gap-40 ml-28 bg-orange-200 mt-6 h-[370px]'>
                <div className='ml-10'>
                    <img
                        src={photo}
                        className="w-[400px] rounded-3xl pt-16" />
                </div>
                <div className='w-[700px] text-start space-y-4 mt-20'>
                    <h2 className="card-title"> <FaUserTie /> <span className='font-bold'>Name:</span> {name}</h2>
                    <h2 className="flex items-center"> <FaUserTie />  <span className='font-bold'>Title:</span> {title}</h2>
                    <p className='flex items-center'><HiDocumentCurrencyDollar /> <span className='font-bold'>Date:</span> {amount}</p>
                    <p className='flex items-center'><MdDateRange /> <span className='font-bold'>Deadline:</span> {date} </p>
                    <p className='flex items-center'><MdMarkEmailUnread /> <span className='font-bold'>Email:</span>  {email}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DateLineCampaignCard;
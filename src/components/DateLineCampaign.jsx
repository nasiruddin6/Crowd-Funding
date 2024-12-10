import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DateLineCampaignCard from './DateLineCampaignCard';
import Marquee from 'react-fast-marquee';


const DateLineCampaign = () => {

    const datelineCampaigns = useLoaderData();

    return (
        <div className='w-9/12 mx-auto'>
            <Marquee>
                <h2 className='text-2xl font-semibold text-red-500'>NOTE: You cannot donate once the date line has passed.</h2>
            </Marquee>
            {

                datelineCampaigns.map(datelineCampaigns => <DateLineCampaignCard
                    key={datelineCampaigns._id}
                    datelineCampaigns={datelineCampaigns}
                ></DateLineCampaignCard>
                )
            }


        </div>
    );
};

export default DateLineCampaign;
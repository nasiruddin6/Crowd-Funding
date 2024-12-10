import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCampaignCard from './MyCampaignCard';

const MyCampaign = () => {

    const myCampaigns = useLoaderData();

    return (
        <div className='m-20'>
            <h2 className='text-6xl text-center font-bold my-20 text-purple-600'>Your Campaign: {myCampaigns.length}</h2>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    myCampaigns.map(myCampaigns => <MyCampaignCard
                        key={myCampaigns._id}
                        myCampaigns={myCampaigns}
                    ></MyCampaignCard>)
                }
            </div>
        </div>
    );
};

export default MyCampaign;
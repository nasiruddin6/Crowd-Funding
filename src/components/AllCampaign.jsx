import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCampaignsCard from './AllCampaignsCard';

const AllCampaign = () => {

    const addCampaigns = useLoaderData();


    return (
        <div className='m-20'>
            <h2 className='text-6xl text-center my-20 font-bold text-purple-600'>Total Campaign: {addCampaigns.length}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md  gap-4'>


                {

                    addCampaigns.map(addCampaign => <AllCampaignsCard
                        key={addCampaign._id}
                        addCampaign={addCampaign}
                    ></AllCampaignsCard>
                    )
                }

            </div>
        </div>
    );
};

export default AllCampaign;
import React from 'react';

const MyDonationForm = () => {
    const handleDonateCampaign = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const title = form.title.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const description = form.description.value;
        const amount = form.amount.value;
        const date = form.date.value;
        const email = form.email.value;

        const donateCampaign = { name, title, photo, type, description, amount, date, email }
        console.log(donateCampaign);

        // send data to the server
        fetch('https://crowd-funding-server-one.vercel.app/donation',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(donateCampaign)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
        })

    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add A Campaign</h2>
            <form onSubmit={handleDonateCampaign}>
                <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
                    {/* campaign 1 name */}
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Campaign Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' className="input input-bordered" placeholder="campaign name" />
                        </label>
                    </div>

                    {/* campaign title */}
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Campaign Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='title' className="input input-bordered" placeholder="campaign title" />
                        </label>
                    </div>

                    {/* campaign photo */}
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="url" name='photo' className="input input-bordered" placeholder="Photo url" />
                        </label>
                    </div>

                    {/* campaign type */}
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Campaign Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='type' className="input input-bordered" placeholder="campaign Type" />
                        </label>
                    </div>

                    {/* details */}
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='description' className="input input-bordered" placeholder="Description" />
                        </label>
                    </div>

                    {/* donation amount */}
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='amount' className="input input-bordered" placeholder="Description" />
                        </label>
                    </div>

                    {/* Deadline Date */}
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Deadline</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name='date' className="input input-bordered" placeholder="Deadline Date" />
                        </label>
                    </div>

                    {/* User email*/}
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Your Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name='email' className="input input-bordered" placeholder="User Email" />
                        </label>
                    </div>
                </div>
                <input className='btn btn-block bg-gray-400 text-white mt-20' type="submit" value="Add Donate" />
            </form>
        </div>
    );
};

export default MyDonationForm;
import { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { HiDocumentCurrencyDollar } from "react-icons/hi2";
import { MdDateRange, MdDeleteSweep, MdMarkEmailUnread, MdOutlineViewInAr } from "react-icons/md";
import { PiSubtitlesThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCampaignCard = ({ myCampaigns }) => {



    const { _id, name, title, photo, type, description, amount, date, email } = myCampaigns;

    const [count, setCount] = useState()

    const notify = () => {
        Swal.fire({
            title: 'No Available!',
            text: 'It,s Not available',
            icon: 'info',
            confirmButtonText: 'OK'
        });
    }

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://crowd-funding-server-one.vercel.app/addCampaign/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Campaign has been deleted.",
                                icon: "success"
                            });

                            
                        }
                    })

                console.log('delete confirmed');
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    className="w-[250px] px-2 py-2 rounded-2xl"
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="pl-3 px-2 py-2 flex justify-between w-full pr-4 ">
                <div className="space-y-2">
                    <h2 className="card-title"><FaUserTie /> {name}</h2>
                    <p className='flex items-center'><PiSubtitlesThin /> {title}</p>
                    <p className='flex items-center'><HiDocumentCurrencyDollar /> {amount}</p>
                    <h2 className='flex items-center'><MdDateRange /> {date}</h2>
                    <h3 className='flex items-center'><MdMarkEmailUnread /> {email}</h3>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button onClick={notify} className="btn bg-blue-400 join-item"><MdOutlineViewInAr /> {count} View</button>
                        <Link to={`/updateCampaign/${_id}`}>
                            <button className="btn bg-green-500 join-item"><GrUpdate /> Update</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-600 join-item"> <MdDeleteSweep /> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCampaignCard;
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';


const Register = () => {
    const [success, setSuccess] = useState(false);
    const { auth, user } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, email, photo, password);
        setSuccess(false);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'This is not acceptable.',
                text: 'At least one uppercase, one lowercase, one number, and one special character & six characters are required.',
            });
            return;

        }

        // create user email and password
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;   
            // Update profile with name and photo
            const profile = {
                displayName: name,
                photoURL: photo
            };
    
            updateProfile(createdUser, profile)
                .then(() => {
                    console.log('User profile updated:', createdUser);
                    
                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Successful!',
                        text: 'Your account has been created successfully with your photo.',
                    });
    
                    setSuccess(true);
                    navigate('/');
                })
                .catch(error => {
                    console.log('Profile update error:', error.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Profile Update Failed',
                        text: error.message,
                    });
                });
    
            e.target.reset();
        })
        .catch(error => {
            console.log('Registration error:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.message,
            });
            setErrorMessage(error.message);
            setSuccess(false);
        });
    


    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <p className='ml-4 mb-4'>
                        Already have an account! please
                        <Link to={'/login'}>Login .</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
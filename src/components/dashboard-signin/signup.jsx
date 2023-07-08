import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../services/firebase';

const SignupForm = () => {

    const auth = getAuth(app)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });

        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <section className='item-center h-screen'>
        <form onSubmit={handleSubmit} className="mt-[25vh] max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Sign up</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            >
                Sign up
            </button>
        </form>
        </section>
    );
};

export default SignupForm;

import React from 'react';

const ContactForm = () => {
    return (
        <form>
            <div className='md:flex gap-3'>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-white">Your Name</span>
                    </div>
                    <input

                        type="text" placeholder="Name" className="input input-bordered w-full text-black" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-white">Your Email</span>
                    </div>
                    <input

                        type="email" placeholder="Email" className="input input-bordered w-full text-black" />
                </label>
            </div>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-white">Subject</span>
                </div>
                <input

                    type="text" placeholder="Subject" className="input input-bordered w-full text-black" />
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-white">Message</span>
                </div>
                <textarea

                    placeholder='Message' className='textarea textarea-bordered text-black'></textarea>
            </label>
            <input className='btn hover:bg-green-400 bg-black mt-5 text-white' type="submit" value="Send Message" />
        </form>
    );
};

export default ContactForm;
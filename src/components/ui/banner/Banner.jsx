'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { GoArrowDown } from "react-icons/go";


const Banner = () => {
    return (
        <div
            className="hero mx-auto min-h-screen bg-fixed px-10 py-32 md:px-96 md:py-52 rounded-lg"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/J7CCqYQ/Whats-App-Image-2024-08-23-at-13-12-11-b05e5b38.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-20 rounded-md"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl md:text-5xl font-serif hover:text-green-400">Assalamu Alaikum !</h1>
                    <p className='text-xl md:text-3xl font-serif mb-3 mt-3'>I am Md Sobuj Rana</p>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Data Entry Specialist !!',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Designer !!',
                            1000,
                            '&',
                            400,
                            'Assistant Merchandiser !!',
                            1000,


                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '20px', display: 'inline-block' }}
                        repeat={Infinity} />
                        <h2 className='text-lg font-serif mt-2'>Bangladesh</h2>

                    <div className=' flex items-center justify-center mt-16'>
                        <svg class="animate-bounce w-10 h-10 ... ">
                            <GoArrowDown size={35} />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
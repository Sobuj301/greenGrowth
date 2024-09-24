import Image from 'next/image';
import React from 'react';
import photo from "../../image/pic-2.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import Link from 'next/link';


const About = () => {
    return (
        <div className='md:flex justify-center gap-10 p-20 '>
            <div className='md:w-1/3 '>
                <Image className='rounded-xl' src={photo} alt='pic.png' width={500} height={400}></Image>
            </div>
            <div className='md:w-1/2 '>
                <h2 className='text-3xl font-serif mt-2'>Hello,I am Sobuj</h2>
                <h3 className='text-2xl font-serif mt-1 mb-3'>Data Entry Specialist & Web Designer.</h3>
                <p className='text-base font-sans'>With a strong passion for both accuracy and creativity, I specialize in data management and web design. My expertise lies in delivering precise and efficient data entry, ensuring every detail is correct using tools like Excel and Google Sheets.</p>

                    <p className='mt-2 text-base font-sans'>In web design, I create responsive, user-friendly websites using technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js. I am committed to blending functionality with design to produce high-quality results that support business growth and user satisfaction.</p>

                <div className='flex gap-8 mt-3'>
                    <FaFacebook size={24} />
                    <FaLinkedin size={24} />
                    <FaInstagram size={24} />
                    <FaTwitter size={24} />
                </div>

                <div className='flex gap-5 mt-8'>
                   <a 
                   href="/sobuj-rana-resume.pdf"
                   ><button className='bg-blue-500 px-6 text-white md:px-10 py-3 rounded-md'>Download CV</button></a>
                    <Link href="#contact"><button className='bg-black text-white px-10 py-3 rounded-md'>Contact</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;
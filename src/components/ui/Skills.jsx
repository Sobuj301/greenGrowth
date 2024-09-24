import Image from 'next/image';
import React from 'react';
import { FaHtml5 } from "react-icons/fa6";
import SkillCard from './SkillCard';
import { FaKeyboard } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaShopify } from "react-icons/fa";


const Skills = () => {

    const skills = [
        {
            id: "1",
            skill: "Shopify",
            icon: FaShopify,
            title: "I build responsive, user-friendly Shopify stores tailored to your brand’s needs. From product listings to storefront design and app integrations, I ensure a seamless shopping experience that helps drive sales and growth."
        },
        {
            id: "2",
            skill: "Data Entry",
            icon: FaKeyboard,
            title: "Data entry involves inputting, updating, and managing information in databases or computer systems. It requires accuracy, attention to detail, and speed to ensure data is recorded and organized correctly for various business operations."
        },

        {
            id: "3",
            skill: "HTML",
            icon: FaHtml5,
            title: "HTML (HyperText Markup Language) structures web pages using tags like <h1> for headings and <p> for paragraphs. It is the foundation of web development, enabling browsers to display content such as text, images, and links."
        },
        {
            id: "4",
            skill: "CSS",
            icon: FaCss3Alt,
            title: "CSS (Cascading Style Sheets) is a stylesheet language used to define the look and layout of web pages. It controls the design, including colors, fonts, spacing, and positioning, allowing for a visually appealing and responsive web experience."
        },
        {
            id: "5",
            skill: "Tailwind CSS",
            icon: RiTailwindCssFill,
            title: "Tailwind CSS is a utility-first CSS framework that allows developers to design web pages directly in their HTML using predefined classes. It simplifies styling by providing a set of ready-to-use, responsive utilities for layout, typography, colors, and more, enabling fast and efficient web design without writing custom CSS."
        },
        {
            id: "6",
            skill: "Javascript",
            icon: SiJavascript,
            title: "JavaScript is a programming language used to create dynamic and interactive elements on web pages. It allows developers to manipulate content, handle events, and control multimedia, making websites more responsive and user-friendly."
        },
        {
            id: "7",
            skill: "React",
            icon: FaReact,
            title: "React is a JavaScript library used for building user interfaces, especially for single-page applications. It allows developers to create reusable components, manage the state efficiently, and update the UI dynamically, making web applications faster and more interactive."
        },
        {
            id: "8",
            skill: "Next.js",
            icon: SiNextdotjs,
            title: "Next.js is a React framework that enables server-side rendering and static site generation for building fast, optimized web applications. It simplifies routing, improves performance, and supports features like API routes and automatic page optimization."
        },
        {
            id: "9",
            skill: "Express.js",
            icon: SiExpress,
            title: "Express.js is a minimal and flexible Node.js web application framework used to build server-side applications and APIs. It simplifies handling requests, routing, and middleware, allowing developers to create robust and scalable web servers efficiently."
        },
        {
            id: "9",
            skill: "MongoDB",
            icon: DiMongodb,
            title: "I design and manage scalable databases using MongoDB, focusing on data modeling, query optimization, and performance tuning to ensure efficient data accessibility for your applications.."
        },
    ]
    return (
        <div className='p-10'>
            <h2 className='text-3xl font-serif text-center shadow-sm p-5 max-w-xl  mx-auto hover:text-green-400 '>What Can I Do</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                {
                    skills.map((skill, index) => <SkillCard key={index} description={skill.title} icon={skill.icon} skill={skill.skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default Skills;
'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCss3Alt, FaDatabase, FaHtml5, FaRegKeyboard, FaResolving } from "react-icons/fa";
import { MdComputer, MdDataUsage } from 'react-icons/md';
import { GrClearOption } from "react-icons/gr";
import { GiRugbyConversion } from "react-icons/gi";
import { SiRoamresearch } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import CategoryCard from './CategoryCard';



const categories = [
    
    {
        "id": 6,
        "category": "Shopify Web Design",
        "description": "A comprehensive guide to using CSS Flexbox for responsive web layouts.",
        "image": "https://i.ibb.co.com/h9dNM6c/design-2.jpg"
    },
    {
        "id": 6,
        "category": "Shopify Web Design",
        "description": "A comprehensive guide to using CSS Flexbox for responsive web layouts.",
        "image": "https://i.ibb.co.com/pwMMhX2/design-3.jpg"
    },
    {
        "id": 7,
        "category": "Shopify Web Design",
        "description": "A comprehensive guide to using CSS Flexbox for responsive web layouts.",
        "image": "https://i.ibb.co.com/zryKFMV/design-4.jpg"
    },
    {
        "id": 8,
        "category": "Shopify Web Design",
        "description": "A comprehensive guide to using CSS Flexbox for responsive web layouts.",
        "image": "https://i.ibb.co.com/h9dNM6c/design-2.jpg"
    },
    {
        "id": 9,
        "category": "Web-Development",
        "description": "A comprehensive guide to using CSS Flexbox for responsive web layouts.",
        "image": "https://i.ibb.co.com/zryKFMV/design-4.jpg"
    },
    {
        "id": 10,
        "category": "Web-Development",
        "description": "A comprehensive guide to using CSS Flexbox for responsive web layouts.",
        "image": "https://i.ibb.co.com/30xptxb/dev-2.jpg"
    },
    {
        "id": 10,
        "category": "Web-Development",
        "description": "A comprehensive guide to using CSS Flexbox for responsive web layouts.",
        "image": "https://i.ibb.co.com/30xptxb/dev-2.jpg"
    },
    {
        "id": 11,
        "category": "Web-Development",
        "description": "A comprehensive guide to using CSS Flexbox for responsive web layouts.",
        "image": "https://i.ibb.co.com/jv9j6Bc/dev-3.jpg"
    },
    {
        "id": 1,
        "category": "Data-Entry",
        "description": "A beginner-friendly course on JavaScript covering the fundamentals of programming.",
        "image": "https://i.ibb.co.com/QHbZnJr/data.jpg"
    },
    {
        "id": 2,
        "category": "Data-Entry",
        "description": "A beginner-friendly course on JavaScript covering the fundamentals of programming.",
        "image": "https://i.ibb.co.com/YNXMbFG/data-entry-2.jpg"
    },
    {
        "id": 3,
        "category": "Data-Entry",
        "description": "A beginner-friendly course on JavaScript covering the fundamentals of programming.",
        "image": "https://i.ibb.co.com/QHbZnJr/data.jpg"
    },
    {
        "id": 4,
        "category": "Data-Entry",
        "description": "A beginner-friendly course on JavaScript covering the fundamentals of programming.",
        "image": "https://i.ibb.co.com/YNXMbFG/data-entry-2.jpg"
    },
    {
        "id": 5,
        "category": "Data-Entry",
        "description": "A beginner-friendly course on JavaScript covering the fundamentals of programming.",
        "image": "https://i.ibb.co.com/YNXMbFG/data-entry-2.jpg"
    },
   
  
]

const Portfolio = () => {
    const [selectCategory , setSelectCategory] = useState("All")

    const handleCategoryChange = (category) =>{
        setSelectCategory(category)
    }

    const filterCategory = selectCategory === "All" ? categories : categories.filter(item => item.category === selectCategory) ;

    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-serif text-center shadow-sm p-5 max-w-xl  mx-auto hover:text-green-400 '>Recent Work</h2>
            <div className='flex  md:max-w-2xl shadow-md border mx-auto justify-around p-5 items-center'>
                <button className='hover:underline hover:scale-110' onClick={() =>{handleCategoryChange('All')}}>All</button>
                <button className='hover:underline hover:scale-110' onClick={() =>{handleCategoryChange('Data-Entry')}}>Data entry</button>
                <button className='hover:underline hover:scale-110' onClick={()=>{handleCategoryChange('Shopify Web Design')}}>Shopify Web Design</button>
                <button className='hover:underline hover:scale-110' onClick={()=>{handleCategoryChange('Web-Development')}}>Web Development</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 '>
                 {
                    filterCategory.map((project,index) =><CategoryCard key={index} project={project}></CategoryCard>)
                 }
            </div>
        </div>
    );
};

export default Portfolio;
import Image from 'next/image';
import React from 'react';

const CategoryCard = ({ project }) => {

    const {id,image,category,description} = project
    return (
        <div className="card bg-base-100 border overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <figure>
                <Image className='w-full h-60 object-cover' src={image} alt='project.pic' width={200} height={100} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn hover:rotate-6">View Project</button>
                </div>
            </div>
        </div>
    )
};

export default CategoryCard;
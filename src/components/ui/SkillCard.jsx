import React from 'react';

const SkillCard = ({ skill, description, icon: Icon }) => {
    return (
        <div className='border rounded-md shadow-2xl p-5'>
            <div className='flex flex-col items-center mb-3'>
                <Icon size={34} />
                <h1 className='text-2xl font-bold'>-- {skill} --</h1>
            </div>
            <p className='text-center text-lg font-medium'>{description}</p>
        </div>
    );
};

export default SkillCard;
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='max-w-5xl p-20 mx-auto pt-24 bg-pink-400'>
           <h2 className='text-2xl font-bold mb-10'>404 - Page Not Found</h2> 
           <p>Sorry, the page you’re looking for cannot be found. It might have been moved, deleted, or never existed.</p>
           <p>You can return to the <span className='text-green-500'><Link href="/">home page</Link></span> or visit  <span className='text-green-500'><Link href="/contact">contact page</Link></span> for assistance.
           </p>
        </div>
    );
};

export default NotFound;
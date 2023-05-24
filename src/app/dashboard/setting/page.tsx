import React from 'react';
import  Link from 'next/link';
const Setting=()=>
{
    return(
        <div className='flex gap-2 py-4 px-5'> 
            <Link href="/dashboard/setting/password">Password</Link>
            <Link href="/dashboard/setting/profile">Profile</Link>
            <h1>Setting</h1>
        </div>
    )
};
export default Setting
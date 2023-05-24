import React from 'react';
import Link from 'next/link';
const Dashboard=()=>
{
    return(
        <div className='flex gap-2 py-4 px-5'> 
            <Link href="/dashboard/setting">Setting</Link>
            <Link href="/dashboard/analytics">Analytics</Link>
            <h1>dashboard</h1>
        </div>
    )
};
export default Dashboard
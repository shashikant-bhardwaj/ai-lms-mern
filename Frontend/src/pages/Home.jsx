import React from 'react'
import UseGetCurrentUser from '../hooks/useGetCurrentUser'
function Home() {
UseGetCurrentUser();
    return (
        <div className='text-2xl'>
            Home page
        </div>
    )
}

export default Home

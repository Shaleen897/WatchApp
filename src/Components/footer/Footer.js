import React from 'react'

 const Footer = () => {
    return (
        <>
            <div className='w-full h-full bg-blue p-4'>
                <div className='flex  w-[80%] h-full justify-between m-auto p-4 self-center'>
                    <div className=''>
                        <ul className='text-gray-500  mr-3'>
                            <li><a href='/'>Help Center</a></li>
                            <li><a href='/'>Jobs</a></li>
                            <li><a href='/'>Cookie Preferences</a></li>
                        </ul>
                    </div>

                    <div className=''>
                        <ul className='text-gray-500'>
                            <li><a href='/'>Gift Cards</a></li>
                            <li><a href='/'>Term of Use</a></li>
                            <li><a href='/'>Cookie Preferences</a></li>
                        </ul>
                    </div>

                    <div className='ml-3'>
                        <ul className='text-gray-500'>
                            <li><a href='/'>Media Center</a></li>
                            <li><a href='/'>Privacy</a></li>
                            <li><a href='/'>Contact Us</a></li>
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}

export default Footer;
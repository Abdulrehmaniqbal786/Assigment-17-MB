import React from 'react'

const data = {
    username: 'user123',
    first_name: 'Anas',
    last_name: 'Shah',
    email: 'mail@mail.com',
    phone: '123456',
    address: '61886 Langosh Fort Suite 555'
}

const User_Profile_Section = () => {
    return (
        <div className='rounded-md px-3 py-4 mt-3 bg-white max-w-full '>



            <h1 className='font-medium text-primary_color text-xl mb-3'>
                My Profile
            </h1>



                <div className='' >
                    <div className='grid grid-cols-1 space-y-3'>
                        <div>
                            <p className='text-secondary_color text-md'>
                                First name
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.first_name}
                            </h1>
                        </div>
                        <div>
                            <p className='text-secondary_color text-md'>
                                Last name
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.last_name}
                            </h1>
                        </div>
                        <div>
                            <p className='text-secondary_color text-md'>
                                Username
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.username}
                            </h1>
                        </div>
                        <div>
                            <p className='text-secondary_color text-md'>
                                Email address
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.email}
                            </h1>
                        </div>
                        <div>
                            <p className='text-secondary_color text-md'>
                                Phone
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.phone}
                            </h1>
                        </div>
                        <div>
                            <p className='text-secondary_color text-md'>
                                Address
                            </p>
                            <h1 className='text-lg font-medium text-primary_color'>
                                {data.address}
                            </h1>
                        </div>
                    </div>
                </div>

        </div>

    )
}

export { User_Profile_Section }
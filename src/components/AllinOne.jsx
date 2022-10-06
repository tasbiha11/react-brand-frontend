import React from 'react';
import { GrWaypoint } from 'react-icons/gr';


const AllinOne = () => {
    return (
        <div name='platforms' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>
                    An all-in-one marketing platform suitable of software tools designed to manage every aspect of an organization's marketing efforts
                </p>

                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

                    <div className='flex'>
                        <div>
                            <GrWaypoint className='w-7 mr-4 mt-2' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Notification</h3>
                            <p className='text-lg pt-2 pb-4 text-justify'>
                                A notification is a message, sound, or symbol on your phone or computer telling you that someone has sent you a message or put something.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <GrWaypoint className='w-7 mr-4 mt-2' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Information</h3>
                            <p className='text-lg pt-2 pb-4 text-justify'>
                                Information is an abstract concept that refers to that which has the power to inform. At the most fundamental level information pertains.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <GrWaypoint className='w-7 mr-4 mt-2' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Assistance</h3>
                            <p className='text-lg pt-2 pb-4 text-justify'>
                                Always ready to help in case of any hurdle. Our professional team awaits to receive any feedbacks to work on to and fix as early as possible.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <GrWaypoint className='w-7 mr-4 mt-2' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Support</h3>
                            <p className='text-lg pt-2 pb-4 text-justify'>
                                Software support services are generally technical support or break/fix services that are delivered for specific software products.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <GrWaypoint className='w-7 mr-4 mt-2' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Advertisement</h3>
                            <p className='text-lg pt-2 pb-4 text-justify'>
                                Advertising is a marketing communication that employs an openly sponsored, non-personal message to promote or sell a product, service.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <GrWaypoint className='w-7 mr-4 mt-2' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Update</h3>
                            <p className='text-lg pt-2 pb-4 text-justify'>
                                Upgrading is the process of replacing a product with a newer version of the same product. In computing and consumer electronics.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <GrWaypoint className='w-7 mr-4 mt-2' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Installation</h3>
                            <p className='text-lg pt-2 pb-4 text-justify'>
                                Installation of the program is the act of making the program ready for execution. Installation refers to the particular configuration of a software.

                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <GrWaypoint className='w-7 mr-4 mt-2' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Service</h3>
                            <p className='text-lg pt-2 pb-4 text-justify'>
                                A service is an " act or use for which a consumer, firm, or government is willing to pay." Examples include work done by our engineers.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllinOne
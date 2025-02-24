import { BtnPrimary } from '../../../shared/ui/BtnPrimary';

export const Footer = () => {
    return (
        <footer className=''>
            <div className='container pl-6 pr-6  lg:max-w-7xl h-auto mt-[80px] md:mt-[135px] mx-auto w-full max-w-screen-xl'>
                <div className=' gap-8 py-6 lg:py-8 flex flex-col md:flex-row justify-between'>
                    <div className='w-full max-w-lg'>
                        <h3 className='mb-6 font-extrabold text-xl'>
                            Follow Us
                        </h3>
                        <p className='text-(--color-secondary)'>
                            sign up for the latest beauty news,product samples
                            and cupons
                        </p>
                        <form className='my-6'>
                            <div className='flex flex-wrap -mx-3 mb-3'>
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label
                                        className='block uppercase tracking-wide text-xs font-semibold mb-2'
                                        htmlFor='grid-first-name'
                                    >
                                        EMAIL ADDRESS*
                                    </label>
                                    <input
                                        className='appearance-none block w-full bg-gray-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                        id='grid-first-name'
                                        type='text'
                                        placeholder='Enter your Email Address'
                                    />
                                    <p className='text-red-500 text-xs italic'>
                                        Please fill out this field.
                                    </p>
                                </div>
                                <div className='w-full md:w-1/2 px-3'>
                                    <label
                                        className='block uppercase tracking-wide text-xs font-semibold mb-2'
                                        htmlFor='grid-last-name'
                                    >
                                        NAME*
                                    </label>
                                    <input
                                        className='appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                        id='grid-last-name'
                                        type='text'
                                        placeholder='Enter your Name'
                                    />
                                </div>
                            </div>
                            <BtnPrimary add='w-full py-[16px] uppercase font-semibold text-sm'>
                                Follow
                            </BtnPrimary>
                        </form>
                        <p className='text-sm text-(--color-secondary)'>
                            Thia site is intended for us consumers.by signing
                            up,you undarstand and agree that your data will be
                            collected and used subject to our us policy and
                            terms of use.
                        </p>
                        <p className='text-sm font-semibold mt-6'>
                            *Required information
                        </p>
                    </div>
                    <div>
                        <h4 className='mb-6 text-sm font-semibold uppercase '>
                            COMPANY
                        </h4>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Privacy Policy
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Licensing
                                </a>
                            </li>
                        </ul>
                        <h4 className='mb-6 text-sm font-semibold uppercase '>
                            MORE TO EXPLORE
                        </h4>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Privacy Policy
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Licensing
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Terms &amp; Conditions
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='mb-6 text-sm font-semibold uppercase '>
                            CUSTOMAR SERVICE
                        </h4>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                            <li className='mb-4'>
                                <a href='#' className=' hover:underline'>
                                    About
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Careers
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Brand Center
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Blog
                                </a>
                            </li>
                        </ul>
                        <h4 className='mb-6 text-sm font-semibold uppercase '>
                            MORE TO EXPLORE
                        </h4>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                            <li className='mb-4'>
                                <a href='#' className=' hover:underline'>
                                    About
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='#' className='hover:underline'>
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex gap-x-4'>
                    <button className='size-10 bg-yellow-300 rounded-full flex justify-center items-center'>
                        <img
                            className='size-4'
                            src='/images/icons/youtube.svg'
                        />
                    </button>
                    <button className='size-10 bg-red-300 rounded-full flex justify-center items-center'>
                        <img
                            className='size-4'
                            src='/images/icons/facebook.svg'
                        />
                    </button>
                    <button className='size-10 bg-green-300 rounded-full flex justify-center items-center'>
                        <img className='size-4' src='/images/icons/media.svg' />
                    </button>
                    <button className='size-10 bg-blue-300 rounded-full flex justify-center items-center'>
                        <img
                            className='size-4'
                            src='/images/icons/twiter.svg'
                        />
                    </button>
                </div>
            </div>

            <div className='w-full mb-6 mt-15 py-[30px] px-6 border-y border-y-(--color-light-grey) flex justify-center'>
                <span className='text-sm text-(--color-secondary) text-center'>
                    This site is intended for us consumers.cookes and related
                    technology are used for advertising.To learn more,visit
                    adchosice and our privacy policy.
                </span>
            </div>
        </footer>
    );
};

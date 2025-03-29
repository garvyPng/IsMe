import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BtnPrimary } from '../../../shared/ui/BtnPrimary';
import {
    ChevronDownIcon,
    XMarkIcon,
    Bars3Icon,
} from '@heroicons/react/16/solid';
import { LoginModal, SignUpModal } from '../../../features/auth';

const navLinks = [
    {
        href: '/',
        label: 'Home',
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                />
            </svg>
        ),
    },
    {
        href: '#services',
        label: 'Services',
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
                />
            </svg>
        ),
    },
    {
        href: '#projects',
        label: 'Projects',
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
                />
            </svg>
        ),
    },
    {
        href: '/news',
        label: 'Blog',
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
                />
            </svg>
        ),
    },
    {
        href: '/about',
        label: 'About',
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z'
                />
            </svg>
        ),
    },
    {
        href: '/contact',
        label: 'Contact',
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
                />
            </svg>
        ),
    },
];

const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
    { code: 'DE', name: 'Deutsch' },
    { code: 'ZH', name: '中文' },
    { code: 'JA', name: '日本語' },
    { code: 'AR', name: 'العربية' },
    { code: 'IT', name: 'Italiano' },
];

const SideBar = ({
    isMenuOpen,
    setIsMenuOpen,
}: {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}) => {
    return (
        <>
            <div
                className={`block lg:hidden fixed w-full h-[100vh]  top-0 transition-all duration-500 ease-in-out z-5 ${
                    isMenuOpen
                        ? ' bg-black/50'
                        : 'pointer-events-none bg-black/0'
                }`}
            ></div>
            <div
                className={`lg:hidden bg-white h-full top-0 right-0 overflow-x-hidden fixed transition-all duration-500 ease-in-out py-4 flex flex-col space-y-4 z-6 ${
                    isMenuOpen ? 'w-[250px] px-6' : 'w-0 px-0'
                }`}
            >
                <button className='py-6' onClick={() => setIsMenuOpen(false)}>
                    <XMarkIcon className='size-6 ' />
                </button>
                <nav className='mb-5'>
                    {navLinks.map((link) => (
                        <div
                            className={`flex items-center text-base px-2 gap-x-2 py-2 rounded-md transition-all duration-200 ease-in-out ${
                                window.location.href.includes(link.href)
                                    ? 'border border-blue-300'
                                    : 'bg-white'
                            } hover:bg-slate-100`}
                            key={link.href}
                        >
                            {link.icon}
                            <Link to={link.href}>{link.label}</Link>
                        </div>
                    ))}
                </nav>
                <div className='flex flex-col mt-auto'>
                    <div className='w-full h-px bg-blue-300'></div>
                    {/* <a className='cursor-pointer order-1'>Sign In</a>
                    <BtnPrimary add='w-full'>Sign Up</BtnPrimary> */}
                    <div
                        className={`flex items-center text-base px-2 gap-x-2 py-2 rounded-md transition-all duration-200 ease-in-out 
                                 hover:bg-slate-100`}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                            />
                        </svg>

                        <a href='#'>Profile</a>
                    </div>
                    <div
                        className={`flex items-center text-base px-2 gap-x-2 py-2 rounded-md transition-all duration-200 ease-in-out 
                                 hover:bg-slate-100`}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75'
                            />
                        </svg>

                        <a href='#'>Log Out</a>
                    </div>
                    <div
                        className={`flex items-center text-base px-2 gap-x-2 py-2 rounded-md transition-all duration-200 ease-in-out 
                                 hover:bg-slate-100`}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z'
                            />
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                            />
                        </svg>

                        <a href='#'>Settings</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const [activeModal, setActiveModal] = useState<'signup' | 'login' | null>(
        null
    );

    const location = useLocation();

    return (
        <>
            <SignUpModal
                open={activeModal === 'signup'}
                onClose={() => setActiveModal(null)}
                switchToLogin={() => setActiveModal('login')}
            />
            <LoginModal
                open={activeModal === 'login'}
                onClose={() => setActiveModal(null)}
                switchToLogin={() => setActiveModal('signup')}
            />

            <header className=' max-w-full bg-white shadow-lg shadow-black/10'>
                <div className='container pl-6 pr-6 lg:max-w-7xl mx-auto pt-6 pb-6 flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <div className='size-[55px] bg-yellow-300 rounded-2xl'></div>
                        <span className='text-2xl font-medium'>
                            Is<span className='text-2xl font-bold'>Me</span>
                        </span>
                    </div>

                    <nav className='hidden lg:flex gap-x-8'>
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <div className='relative' key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`text-base ${
                                            isActive
                                                ? 'after:left-0 after:w-full text-blue-500 '
                                                : 'after:left-1/2 after:w-0'
                                        } hover:text-blue-500 after:absolute after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full`}
                                    >
                                        {link.label}
                                    </a>
                                </div>
                            );
                        })}
                    </nav>

                    <div className='hidden lg:flex items-center space-x-4'>
                        <div className='relative'>
                            <button
                                onClick={() =>
                                    setIsLanguageOpen(!isLanguageOpen)
                                }
                                className={`${
                                    isLanguageOpen
                                        ? 'after:left-0 after:w-full text-blue-500'
                                        : 'after:left-1/2 after:w-0'
                                } py-2 transition flex items-center gap-1 hover:text-blue-500 after:absolute after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full`}
                            >
                                {selectedLanguage.code}
                                <ChevronDownIcon
                                    className={`size-5 transform transition-transform ${
                                        isLanguageOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {isLanguageOpen && (
                                <ul className='absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md'>
                                    {languages.map((lang) => (
                                        <li
                                            key={lang.code}
                                            onClick={() => {
                                                setSelectedLanguage(lang);
                                                setIsLanguageOpen(false);
                                            }}
                                            className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                                        >
                                            {lang.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {/* <select className='w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base focus:outline-none'>
                                {languages.map((language, index) => (
                                    <option key={index}>{language.name}</option>
                                ))}
                            </select>
                            <ChevronDownIcon className='absolute right-2 top-1/2 transform -translate-y-1/2 size-5 text-gray-500' /> */}
                        </div>

                        {/* Sign In / Sign Up */}
                        <div className='flex space-x-4'>
                            <button
                                onClick={() => setActiveModal('login')}
                                className='py-2 cursor-pointer hover:text-blue-500'
                            >
                                Sign In
                            </button>
                            <BtnPrimary
                                onClick={() => setActiveModal('signup')}
                            >
                                Sign Up
                            </BtnPrimary>
                        </div>
                    </div>

                    <div className='lg:hidden flex items-center'>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className='text-xl text-gray-700'
                        >
                            <Bars3Icon className='size-6' />
                        </button>
                    </div>
                </div>
            </header>

            <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </>
    );
};

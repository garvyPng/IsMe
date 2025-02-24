import { useState } from 'react';
import { BtnPrimary } from '../../../shared/ui/BtnPrimary';
import {
    ChevronDownIcon,
    XMarkIcon,
    Bars3Icon,
} from '@heroicons/react/16/solid';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
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
                className={`fixed w-full h-[100vh]  top-0 transition-all duration-500 ease-in-out z-5 ${
                    isMenuOpen
                        ? ' bg-black/50'
                        : 'pointer-events-none bg-black/0'
                }`}
            ></div>
            <div
                className={`bg-white h-full top-0 right-0 overflow-x-hidden fixed transition-all duration-500 ease-in-out py-4 flex flex-col space-y-4 z-6 ${
                    isMenuOpen ? 'w-[250px] px-6' : 'w-0 px-0'
                }`}
            >
                <button className='py-6' onClick={() => setIsMenuOpen(false)}>
                    <XMarkIcon className='size-6 ' />
                </button>
                <a href='#home' className='text-base hover:text-blue-600'>
                    Home
                </a>
                <a href='#services' className='text-base hover:text-blue-600'>
                    Services
                </a>
                <a href='#projects' className='text-base hover:text-blue-600'>
                    Projects
                </a>
                <a href='#blog' className='text-base hover:text-blue-600'>
                    Blog
                </a>
                <a href='#about' className='text-base hover:text-blue-600'>
                    About
                </a>
                <a href='#contact' className='text-base hover:text-blue-600'>
                    Contact
                </a>
                <div className='flex flex-col  items-center space-y-4'>
                    <a className='cursor-pointer order-1'>Sign In</a>
                    <BtnPrimary add='w-full'>Sign Up</BtnPrimary>
                </div>
            </div>
        </>
    );
};

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    return (
        <>
            <header className=' max-w-full bg-white shadow-lg shadow-black/10'>
                <div className='container pl-6 pr-6 lg:max-w-7xl mx-auto pt-6 pb-6 flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <div className='size-[55px] bg-yellow-300 rounded-2xl'></div>
                        <span className='text-2xl font-medium'>
                            Is<span className='text-2xl font-bold'>Me</span>
                        </span>
                    </div>

                    <nav className='hidden lg:flex gap-x-8'>
                        {navLinks.map((link) => (
                            <div className='relative' key={link.href}>
                                <a
                                    href={link.href}
                                    className={`text-base ${
                                        window.location.href.includes(link.href)
                                            ? 'after:left-0 after:w-full text-blue-500'
                                            : 'after:left-1/2 after:w-0'
                                    } hover:text-blue-500 after:absolute after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full`}
                                >
                                    {link.label}
                                </a>
                            </div>
                        ))}
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
                            <a className='py-2 cursor-pointer'>Sign In</a>
                            <BtnPrimary>Sign Up</BtnPrimary>
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

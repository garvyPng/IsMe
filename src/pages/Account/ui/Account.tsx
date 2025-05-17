'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react';
import {
    ChartBarSquareIcon,
    Cog6ToothIcon,
    FolderIcon,
    GlobeAltIcon,
    ServerIcon,
    SignalIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import {
    Bars3Icon,
    ChevronRightIcon,
    ChevronUpDownIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../shared/lib/context/AuthContext';

const navigation = [
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Deployments', href: '#', icon: ServerIcon, current: true },
    { name: 'Activity', href: '#', icon: SignalIcon, current: false },
    { name: 'Domains', href: '#', icon: GlobeAltIcon, current: false },
    { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
    { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
];
const teams = [
    { id: 1, name: 'Team1', href: '#', initial: 'P', current: false },
    { id: 2, name: 'Team2', href: '#', initial: 'P', current: false },
    { id: 3, name: 'Team3', href: '#', initial: 'T', current: false },
];
const statuses = {
    offline: 'text-gray-500 bg-gray-100/10',
    online: 'text-green-400 bg-green-400/10',
    error: 'text-rose-400 bg-rose-400/10',
} as const;

type Status = keyof typeof statuses;

const environments = {
    Preview: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
    Production: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
};

type Environment = keyof typeof environments;

type Deployment = {
    id: number;
    href: string;
    projectName: string;
    teamName: string;
    status: Status;
    statusText: string;
    description: string;
    environment: Environment;
};

const deployments: Deployment[] = [
    {
        id: 1,
        href: '#',
        projectName: 'ios-app',
        teamName: 'Planetaria',
        status: 'offline',
        statusText: 'Initiated 1m 32s ago',
        description: 'Deploys from GitHub',
        environment: 'Preview',
    },
    {
        id: 2,
        href: '#',
        projectName: 'ios-app',
        teamName: 'Planetaria',
        status: 'offline',
        statusText: 'Initiated 1m 32s ago',
        description: 'Deploys from GitHub',
        environment: 'Preview',
    },
];
const activityItems = [
    {
        user: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        projectName: 'ios-app',
        commit: '2d89f0c8',
        branch: 'main',
        date: '1h',
        dateTime: '2023-01-23T11:00',
    },
    // More items...
];

function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export const Account = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { session } = useAuth();
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
            <div>
                <Dialog
                    open={sidebarOpen}
                    onClose={setSidebarOpen}
                    className='relative z-50 xl:hidden'
                >
                    <DialogBackdrop
                        transition
                        className='fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0'
                    />

                    <div className='fixed inset-0 flex'>
                        <DialogPanel
                            transition
                            className='relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full'
                        >
                            <TransitionChild>
                                <div className='absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0'>
                                    <button
                                        type='button'
                                        onClick={() => setSidebarOpen(false)}
                                        className='-m-2.5 p-2.5'
                                    >
                                        <span className='sr-only'>
                                            Close sidebar
                                        </span>
                                        <XMarkIcon
                                            aria-hidden='true'
                                            className='size-6 text-white'
                                        />
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className='flex grow flex-col gap-y-5 bg-white overflow-y-auto px-6'>
                                <div className='flex h-16 shrink-0 items-center'>
                                    <div className='flex items-center space-x-2'>
                                        <div className='size-[35px] bg-yellow-300 rounded-xl'></div>
                                        <span className='text-2xl font-medium'>
                                            Is
                                            <span className='text-2xl font-bold'>
                                                Me
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <nav className='flex flex-1 flex-col'>
                                    <ul
                                        role='list'
                                        className='flex flex-1 flex-col gap-y-7'
                                    >
                                        <li>
                                            <ul
                                                role='list'
                                                className='-mx-2 space-y-1'
                                            >
                                                {navigation.map((link) => {
                                                    const isActive =
                                                        location.pathname ===
                                                        link.href;
                                                    return (
                                                        <li
                                                            className={`flex items-center text-base px-2 gap-x-2 py-2 rounded-md transition-all duration-200 ease-in-out ${
                                                                isActive
                                                                    ? 'border border-blue-300'
                                                                    : 'bg-white'
                                                            } hover:bg-slate-100`}
                                                            key={link.href}
                                                        >
                                                            <link.icon
                                                                aria-hidden='true'
                                                                className='size-6 shrink-0'
                                                            />
                                                            <Link
                                                                className='w-full'
                                                                to={link.href}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                        <li>
                                            <div className='text-xs/6 text-gray-400'>
                                                Your teams
                                            </div>
                                            <ul
                                                role='list'
                                                className='-mx-2 mt-2 space-y-1'
                                            >
                                                {teams.map((link) => {
                                                    const isActive =
                                                        location.pathname ===
                                                        link.href;
                                                    return (
                                                        <li
                                                            className={`flex items-center text-base px-2 gap-x-2 py-2 rounded-md transition-all duration-200 ease-in-out ${
                                                                isActive
                                                                    ? 'border border-blue-300'
                                                                    : 'bg-white'
                                                            } hover:bg-slate-100`}
                                                            key={link.href}
                                                        >
                                                            <span className='flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'>
                                                                {link.initial}
                                                            </span>
                                                            <Link
                                                                className='w-full'
                                                                to={link.href}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                        <li className='-mx-6 mt-auto'>
                                            <a
                                                href='#'
                                                className='flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold'
                                            >
                                                {/* <img
                                                    alt=''
                                                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                                    className='size-8 rounded-full bg-gray-800'
                                                /> */}
                                                <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold'>
                                                    {session?.user
                                                        ?.user_metadata?.name
                                                        ? session?.user?.user_metadata?.name[0].toUpperCase()
                                                        : 'U'}
                                                </div>
                                                <span aria-hidden='true'>
                                                    {
                                                        session?.user
                                                            ?.user_metadata
                                                            ?.name
                                                    }
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className='hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col'>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 ring-1 ring-white/5'>
                        <div className='flex h-16 shrink-0 items-center'>
                            <div className='flex items-center space-x-2'>
                                <div className='size-[35px] bg-yellow-300 rounded-xl'></div>
                                <span className='text-2xl font-medium'>
                                    Is
                                    <span className='text-2xl font-bold'>
                                        Me
                                    </span>
                                </span>
                            </div>
                        </div>
                        <nav className='flex flex-1 flex-col'>
                            <ul
                                role='list'
                                className='flex flex-1 flex-col gap-y-7'
                            >
                                <li>
                                    <ul role='list' className='-mx-2 space-y-1'>
                                        {navigation.map((link) => {
                                            const isActive =
                                                location.pathname === link.href;
                                            return (
                                                <li
                                                    className={`flex items-center text-base px-2 gap-x-2 py-2 rounded-md transition-all duration-200 ease-in-out ${
                                                        isActive
                                                            ? 'border border-blue-300'
                                                            : 'bg-white'
                                                    } hover:bg-slate-100`}
                                                    key={link.href}
                                                >
                                                    <link.icon
                                                        aria-hidden='true'
                                                        className='size-6 shrink-0'
                                                    />
                                                    <Link
                                                        className='w-full'
                                                        to={link.href}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <div className='text-xs/6 text-gray-400'>
                                        Your teams
                                    </div>
                                    <ul
                                        role='list'
                                        className='-mx-2 mt-2 space-y-1'
                                    >
                                        {teams.map((link) => {
                                            const isActive =
                                                location.pathname === link.href;
                                            return (
                                                <li
                                                    className={`flex items-center text-base px-2 gap-x-2 py-2 rounded-md transition-all duration-200 ease-in-out ${
                                                        isActive
                                                            ? 'border border-blue-300'
                                                            : 'bg-white'
                                                    } hover:bg-slate-100`}
                                                    key={link.href}
                                                >
                                                    <span className='flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'>
                                                        {link.initial}
                                                    </span>
                                                    <Link
                                                        className='w-full'
                                                        to={link.href}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                                <li className='-mx-6 mt-auto'>
                                    <a
                                        href='#'
                                        className='flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold  '
                                    >
                                        <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center  font-semibold'>
                                            {session?.user?.user_metadata?.name
                                                ? session?.user?.user_metadata?.name[0].toUpperCase()
                                                : 'U'}
                                        </div>
                                        <span aria-hidden='true'>
                                            {session?.user?.user_metadata?.name}
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className='xl:pl-72'>
                    {/* Sticky search header */}
                    <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-slate-100 px-4 shadow-xs sm:px-6 lg:px-8'>
                        <button
                            type='button'
                            onClick={() => setSidebarOpen(true)}
                            className='-m-2.5 p-2.5 text-white xl:hidden'
                        >
                            <span className='sr-only'>Open sidebar</span>
                            <Bars3Icon aria-hidden='true' className='size-5' />
                        </button>

                        <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
                            <form
                                action='#'
                                method='GET'
                                className='grid flex-1 grid-cols-1'
                            >
                                <input
                                    name='search'
                                    type='search'
                                    placeholder='Search'
                                    aria-label='Search'
                                    className='col-start-1 row-start-1 block size-full bg-transparent pl-8 text-base text-white outline-hidden placeholder:text-gray-500 sm:text-sm/6'
                                />
                                <MagnifyingGlassIcon
                                    aria-hidden='true'
                                    className='pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-500'
                                />
                            </form>
                        </div>
                    </div>

                    <main className='lg:pr-96 bg-slate-100 h-[100vh]'>
                        <header className='flex items-center justify-between bg-slate-100 border-b border-slate-100 px-4 py-4 sm:px-6 sm:py-6 lg:px-8'>
                            <h1 className='text-base/7 font-semibold '>
                                Deployments
                            </h1>

                            {/* Sort dropdown */}
                            <Menu as='div' className='relative'>
                                <MenuButton className='flex items-center gap-x-1 text-sm/6 font-medium '>
                                    Sort by
                                    <ChevronUpDownIcon
                                        aria-hidden='true'
                                        className='size-5 text-gray-500'
                                    />
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className='absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'
                                >
                                    <MenuItem>
                                        <a
                                            href='#'
                                            className='block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden'
                                        >
                                            Name
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href='#'
                                            className='block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden'
                                        >
                                            Date updated
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href='#'
                                            className='block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden'
                                        >
                                            Environment
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </header>

                        {/* Deployment list */}
                        <ul role='list' className='divide-y divide-white/5'>
                            {deployments.map((deployment) => (
                                <li
                                    key={deployment.id}
                                    className='relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8'
                                >
                                    <div className='min-w-0 flex-auto'>
                                        <div className='flex items-center gap-x-3'>
                                            <div
                                                className={classNames(
                                                    statuses[deployment.status],
                                                    'flex-none rounded-full p-1'
                                                )}
                                            >
                                                <div className='size-2 rounded-full bg-current' />
                                            </div>
                                            <h2 className='min-w-0 text-sm/6 font-semibold '>
                                                <a
                                                    href={deployment.href}
                                                    className='flex gap-x-2'
                                                >
                                                    <span className='truncate'>
                                                        {deployment.teamName}
                                                    </span>
                                                    <span className='text-gray-400'>
                                                        /
                                                    </span>
                                                    <span className='whitespace-nowrap'>
                                                        {deployment.projectName}
                                                    </span>
                                                    <span className='absolute inset-0' />
                                                </a>
                                            </h2>
                                        </div>
                                        <div className='mt-3 flex items-center gap-x-2.5 text-xs/5 text-gray-400'>
                                            <p className='truncate'>
                                                {deployment.description}
                                            </p>
                                            <svg
                                                viewBox='0 0 2 2'
                                                className='size-0.5 flex-none fill-gray-300'
                                            >
                                                <circle r={1} cx={1} cy={1} />
                                            </svg>
                                            <p className='whitespace-nowrap'>
                                                {deployment.statusText}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={classNames(
                                            environments[
                                                deployment.environment
                                            ],
                                            'flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset'
                                        )}
                                    >
                                        {deployment.environment}
                                    </div>
                                    <ChevronRightIcon
                                        aria-hidden='true'
                                        className='size-5 flex-none text-gray-400'
                                    />
                                </li>
                            ))}
                        </ul>
                    </main>

                    {/* Activity feed */}
                    <aside className='bg-slate-200 lg:fixed lg:top-16 lg:right-0 lg:bottom-0 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5'>
                        <header className='flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8'>
                            <h2 className='text-base/7 font-semibold '>
                                Activity feed
                            </h2>
                            <a
                                href='#'
                                className='text-sm/6 font-semibold text-indigo-400'
                            >
                                View all
                            </a>
                        </header>
                        <ul role='list' className='divide-y divide-white/5'>
                            {activityItems.map((item) => (
                                <li
                                    key={item.commit}
                                    className='px-4 py-4 sm:px-6 lg:px-8'
                                >
                                    <div className='flex items-center gap-x-3'>
                                        <img
                                            alt=''
                                            src={item.user.imageUrl}
                                            className='size-6 flex-none rounded-full bg-gray-800'
                                        />
                                        <h3 className='flex-auto truncate text-sm/6 font-semibold '>
                                            {item.user.name}
                                        </h3>
                                        <time
                                            dateTime={item.dateTime}
                                            className='flex-none text-xs text-gray-600'
                                        >
                                            {item.date}
                                        </time>
                                    </div>
                                    <p className='mt-3 truncate text-sm text-gray-500'>
                                        Pushed to{' '}
                                        <span className='text-gray-400'>
                                            {item.projectName}
                                        </span>{' '}
                                        (
                                        <span className='font-mono text-gray-400'>
                                            {item.commit}
                                        </span>{' '}
                                        on{' '}
                                        <span className='text-gray-400'>
                                            {item.branch}
                                        </span>
                                        )
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </>
    );
};

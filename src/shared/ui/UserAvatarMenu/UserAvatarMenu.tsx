import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface UserAvatarMenuProps {
    email?: string;
    fullName?: string;
    onLogout: () => void;
}

export const UserAvatarMenu: React.FC<UserAvatarMenuProps> = ({
    email,
    fullName,
    onLogout,
}) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setOpen(!open);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='relative' ref={menuRef}>
            <button onClick={toggleMenu}>
                <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold'>
                    {fullName ? fullName[0].toUpperCase() : 'U'}
                </div>
            </button>

            {open && (
                <div className='absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-50 p-2 text-sm text-gray-700'>
                    <div className='px-4 py-2 border-b'>
                        <div className='font-semibold'>
                            {fullName || 'Unnamed User'}
                        </div>
                        <div className='text-xs text-gray-500'>{email}</div>
                    </div>
                    <ul className='py-1'>
                        <li>
                            <Link
                                to='/profile'
                                className='block px-4 py-2 hover:bg-gray-100'
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/settings'
                                className='block px-4 py-2 hover:bg-gray-100'
                            >
                                Settings
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    onLogout();
                                }}
                                className='block w-full text-left px-4 py-2 hover:bg-gray-100'
                            >
                                Log out
                            </button>
                        </li>
                        <li>
                            <Link
                                to='/help'
                                className='block px-4 py-2 hover:bg-gray-100'
                            >
                                Help
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() =>
                                    alert('Switch user functionality')
                                }
                                className='block w-full text-left px-4 py-2 hover:bg-gray-100'
                            >
                                Switch account
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

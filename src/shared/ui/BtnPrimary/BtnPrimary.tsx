import { ReactNode } from 'react';

interface BtnPrimaryProps {
    children: ReactNode;
    add?: string;
    onClick?: () => void;
    secondary?: boolean;
}

export const BtnPrimary = ({
    children,
    add,
    onClick,
    secondary,
}: BtnPrimaryProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-md ${
                secondary
                    ? 'border border-gray-300 hover:bg-gray-100'
                    : 'bg-blue-300 text-white  hover:bg-blue-500'
            }  ${add}`}
        >
            {children}
        </button>
    );
};

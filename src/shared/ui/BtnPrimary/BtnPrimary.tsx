import { ReactNode } from 'react';

interface BtnPrimaryProps {
    children: ReactNode;
    add?: string;
}

export const BtnPrimary = ({ children, add }: BtnPrimaryProps) => {
    return (
        <button
            className={`px-6 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-500 ${add}`}
        >
            {children}
        </button>
    );
};

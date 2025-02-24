import { ReactNode } from 'react';

interface SectionInfoProps {
    title: string;
    children: ReactNode;
    linkName: string;
    link: string;
}

export const SectionInfo = ({
    title,
    children,
    linkName,
    link,
}: SectionInfoProps) => {
    return (
        <div className='lg:max-w-4/9 flex flex-col justify-center space-y-3 lg:space-y-6 text-base lg:text-lg/[36px]'>
            <div className='w-[60px] h-[5px] bg-gradient-to-r from-blue-300 from-40% to-green-300 '></div>
            <h2 className='font-extrabold text-2xl lg:text-4xl'>{title}</h2>
            {children}
            <a
                className='w-max text-sm lg:text-base bg-linear-65 from-blue-300 from-40% to-green-300 text-transparent bg-clip-text'
                href={link}
            >
                {linkName} <span>&rarr;</span>
            </a>
        </div>
    );
};

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
    return (
        <div className='w-full flex flex-col items-center justify-center space-y-3 lg:space-y-6 mb-10 md:mb-[80px]'>
            <div className='w-[60px] h-[5px] bg-gradient-to-r from-blue-300 from-40% to-green-300 '></div>
            <h2 className='font-extrabold text-2xl lg:text-4xl'>{title}</h2>
            <p className='lg:w-3/5 leading-[36px] text-base lg:text-xl text-center text-(--color-secondary)'>
                {subtitle}
            </p>
        </div>
    );
};

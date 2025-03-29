interface PageIntroProps {
    title: string;
    coloredTitle: string;
    subtitle: string;
}

export const PageIntro = ({
    title,
    coloredTitle,
    subtitle,
}: PageIntroProps) => {
    return (
        <div className='container mt-20 pl-6 pr-6  lg:max-w-3xl mx-auto h-auto flex flex-col gap-y-3'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl pb-2 lg:leading-17 font-extrabold text-center'>
                {title}{' '}
                <span className='bg-linear-65 from-blue-300 from-40% to-green-300 text-transparent bg-clip-text'>
                    {coloredTitle}
                </span>
            </h1>
            <p className='text-(--color-secondary) text-base text-center lg:text-lg pb-8'>
                {subtitle}
            </p>
        </div>
    );
};

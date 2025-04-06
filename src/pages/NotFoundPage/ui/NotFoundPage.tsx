import { BtnPrimary } from '../../../shared/ui/BtnPrimary';

export const NotFoundPage = () => {
    return (
        <div className='container pl-6 pr-6  lg:max-w-7xl mx-auto h-auto pt-8 flex flex-col md:flex-row justify-between align-middle gap-x-8'>
            <div className='h-40 md:h-auto overflow-hidden md:max-w-1/2 md:max-h-auto rounded-3xl md:rounded-[150px] lg:rounded-[230px] flex items-center justify-center'>
                <img className='object-cover' src='/images/404.webp' />
            </div>
            <div className='lg:max-w-120 md:max-w-1/2 lg:pr-20 flex flex-col justify-center items-center'>
                <h1 className='text-8xl lg:text-[200px] pb-2  font-extrabold bg-linear-65 from-blue-300 to-green-300 to-70% text-transparent bg-clip-text'>
                    404
                </h1>
                <h2 className='text-(--color-secondary) text-base md:text-lg text-center md:text-justify lg:text-3xl pb-2 lg:pb-5'>
                    Oops, it seems you are lost
                </h2>
                <p className=' text-(--color-secondary) text-sm lg:text-base text-center md:text-justify pb-4 lg:pb-8'>
                    We can’t find the page that you are looking for...
                </p>
                <div className='block md:flex space-x-4'>
                    <BtnPrimary>Go Home</BtnPrimary>
                </div>
            </div>
        </div>
    );
};

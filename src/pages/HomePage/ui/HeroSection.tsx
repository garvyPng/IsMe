import { BtnPrimary } from '../../../shared/ui/BtnPrimary';
import { BtnSecondary } from '../../../shared/ui/BtnSecondary';

export const HeroSection = () => {
    return (
        <>
            <div className='container pl-6 pr-6  lg:max-w-7xl mx-auto h-auto pt-8 flex flex-col md:flex-row justify-between align-middle gap-6'>
                <div className='order-1 md:order-0 md:max-w-1/2 flex flex-col justify-center items-center md:items-start'>
                    <h1 className='text-2xl md:text-4xl lg:text-6xl pb-2 lg:leading-17 font-extrabold'>
                        <span className='bg-linear-65 from-blue-300 from-40% to-green-300 text-transparent bg-clip-text'>
                            Empowering{' '}
                        </span>
                        <span className='font-semibold'>Trust.</span>
                        <br></br>
                        <span>Ensuring </span>
                        <span className='bg-linear-65 from-blue-300 to-green-300 to-70% text-transparent bg-clip-text'>
                            Safety.
                        </span>
                    </h1>
                    <p className='text-(--color-secondary) text-base text-center md:text-justify lg:text-lg pb-8'>
                        The revolutionary fraud prevention technology that will
                        redefine digital trust.
                    </p>
                    <div className='block md:flex space-x-4'>
                        <BtnPrimary>Learn More</BtnPrimary>
                        <BtnSecondary>Invest Now</BtnSecondary>
                    </div>
                </div>
                <div className='h-40 md:h-auto overflow-hidden md:max-w-1/2 md:max-h-auto rounded-3xl md:rounded-[150px] lg:rounded-[230px] flex items-center justify-center'>
                    <img className='object-cover' src='/images/hero.jpg' />
                </div>
            </div>
        </>
    );
};

import { ReactNode } from 'react';

const ImageBtn = ({
    props,
    children,
}: {
    props: string;
    children: ReactNode;
}) => (
    <button
        className={`size-[30px] md:size-[45px] border-white border rounded-md items-center transition duration-300 hover:bg-black/50 hover:scale-120  ${props}`}
    >
        {/* <img
            className='size-[15px] md:size-[22px] m-auto transition duration-300 opacity-100 hover:opacity-50'
            src={icon}
            alt='like'
        /> */}
        {children}
    </button>
);

const ImageItem = ({ image }: { image: string }) => (
    <div className='group relative size-[140px] md:size-[200px] lg:size-[310px] rounded-3xl bg-gradient-to-br from-blue-300 from-40% to-green-300'>
        <div className='rounded-3xl group-hover:bg-black transition-transform duration-300 md:group-hover:translate-x-3 md:group-hover:-translate-y-3'>
            <img
                className='rounded-3xl w-full h-full object-cover block transition-opacity duration-300 group-hover:opacity-30'
                src={image}
                alt='image'
            />
        </div>
        <div className='absolute md:left-3 top-1/2 w-full text-white opacity-0 transition-opacity duration-100 group-hover:opacity-100 text-center transform -translate-y-1/2 z-10'>
            <div className='space-x-1 md:space-x-2'>
                <ImageBtn props='hover:text-red-300  hover:border-red-300'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='size-5 md:size-6 m-auto'
                    >
                        <path d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z' />
                    </svg>
                </ImageBtn>
                <ImageBtn props='hover:text-blue-300  hover:border-blue-300'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='size-5 md:size-6 m-auto'
                    >
                        <path
                            strokeLinecap='round'
                            d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
                        />
                    </svg>
                </ImageBtn>
                <ImageBtn props='hover:text-green-300  hover:border-green-300'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='size-5 md:size-6 m-auto'
                    >
                        <path
                            strokeLinejoin='round'
                            d='M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z'
                        />
                    </svg>
                </ImageBtn>
            </div>
        </div>
    </div>
);

export const ImagesSection = () => {
    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[80px] md:mt-[135px] h-auto'>
            <div className='flex flex-wrap justify-center gap-2 md:gap-6'>
                <ImageItem image='/images/alien1.webp' />
                <ImageItem image='/images/alien2.webp' />
                <ImageItem image='/images/alien3.jpg' />
                <ImageItem image='/images/alien1.webp' />
                <ImageItem image='/images/alien2.webp' />
                <ImageItem image='/images/alien3.jpg' />
            </div>
        </section>
    );
};

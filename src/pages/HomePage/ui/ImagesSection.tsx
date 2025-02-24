const ImageBtn = ({ icon }: { icon: string }) => (
    <button className='size-[30px] md:size-[45px] border-white border rounded-md items-center'>
        <img
            className='size-[15px] md:size-[22px] m-auto'
            src={icon}
            alt='like'
        />
    </button>
);

const ImageItem = ({ image }: { image: string }) => (
    <div className='group relative size-[120px] md:size-[200px] lg:size-[310px] rounded-3xl bg-gradient-to-br from-blue-300 from-40% to-green-300'>
        <div className='rounded-3xl bg-black transition-transform duration-300 md:group-hover:translate-x-3 md:group-hover:-translate-y-3'>
            <img
                className='rounded-3xl w-full h-full object-cover block transition-opacity duration-300 group-hover:opacity-30'
                src={image}
                alt='image'
            />
        </div>
        <div className='absolute md:left-[10px] top-1/2 w-full text-white opacity-0 transition-opacity duration-100 group-hover:opacity-100 text-center transform -translate-y-1/2 z-10'>
            <div className='space-x-2'>
                <ImageBtn icon='/images/icons/like.svg' />
                <ImageBtn icon='/images/icons/save.svg' />
                <ImageBtn icon='/images/icons/share.svg' />
            </div>
        </div>
    </div>
);

export const ImagesSection = () => {
    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[80px] md:mt-[135px] h-auto'>
            <div className='flex flex-wrap justify-center gap-3 md:gap-6'>
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

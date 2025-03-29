import { SectionHeader } from '../../../shared/ui/SectionHeader';

const founders = [
    {
        name: 'Samuel Dumitru',
        profession: 'CO-FOUNDER & CO-CEO',
        color: 'bg-yellow-300',
        image: '/images/man.png',
    },
    {
        name: 'Samuel Dumitru',
        profession: 'CO-FOUNDER & CO-CEO',
        color: 'bg-red-300',
        image: '/images/man.png',
    },
    {
        name: 'Samuel Dumitru',
        profession: 'CO-FOUNDER & CO-CEO',
        color: 'bg-green-300',
        image: '/images/man.png',
    },
    {
        name: 'Samuel Dumitru',
        profession: 'CO-FOUNDER & CO-CEO',
        color: 'bg-blue-300',
        image: '/images/man.png',
    },
    {
        name: 'Samuel Dumitru',
        profession: 'CO-FOUNDER & CO-CEO',
        color: 'bg-yellow-300',
        image: '/images/man.png',
    },
    {
        name: 'Samuel Dumitru',
        profession: 'CO-FOUNDER & CO-CEO',
        color: 'bg-red-300',
        image: '/images/man.png',
    },
];

export const Founders = () => {
    return (
        <section className='container px-6 lg:max-w-6xl mx-auto mt-[80px] md:mt-[135px] h-auto flex flex-col  gap-x-6 lg:justify-between align-middle'>
            <SectionHeader title={'Our Founders'}></SectionHeader>
            <div className='flex flex-wrap gap-15 justify-between'>
                {founders.map((founder) => (
                    <div className='flex flex-col gap-3'>
                        <div
                            className={`relative w-[280px] h-[305px] rounded-3xl ${founder.color}`}
                        >
                            <img
                                src={founder.image}
                                className='absolute h-[340px] left-1/2 transform -translate-x-1/2 bottom-0'
                                alt={founder.name}
                            />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-xl font-semibold'>
                                {founder.name}
                            </h3>
                            <p className='text-xs text-(--color-secondary)'>
                                {founder.profession}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

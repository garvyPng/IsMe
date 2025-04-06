import { ChartPieIcon } from '@heroicons/react/16/solid';
import { SectionHeader } from '../../../shared/ui/SectionHeader';

const values = [
    {
        title: 'Collaboration1',
        description: 'We harness the collective expertise and creativity',
        color: 'text-red-500 bg-red-300',
        icon: ChartPieIcon,
    },
    {
        title: 'Collaboration2',
        description: 'We harness the collective expertise and creativity',
        color: 'text-blue-500 bg-blue-300',
        icon: ChartPieIcon,
    },
    {
        title: 'Collaboration3',
        description: 'We harness the collective expertise and creativity',
        color: 'text-yellow-500 bg-yellow-300',
        icon: ChartPieIcon,
    },
    {
        title: 'Collaboration4',
        description: 'We harness the collective expertise and creativity',
        color: 'text-yellow-500 bg-yellow-300',
        icon: ChartPieIcon,
    },
    {
        title: 'Collaboration5',
        description: 'We harness the collective expertise and creativity',
        color: 'text-green-500 bg-green-300',
        icon: ChartPieIcon,
    },
    {
        title: 'Collaboration6',
        description: 'We harness the collective expertise and creativity',
        color: 'text-blue-500 bg-blue-300',
        icon: ChartPieIcon,
    },
];

export const Values = () => {
    return (
        <section className='container px-6 lg:max-w-6xl mx-auto mt-[80px] md:mt-[135px] h-auto flex flex-col  gap-x-6 lg:justify-between align-middle'>
            <SectionHeader title={'Our Values'}></SectionHeader>
            <div className='flex flex-wrap gap-4 md:gap-8 lg:gap-15 justify-center md:justify-between'>
                {values.map((value) => (
                    <div className='flex  items-center lg:items-start gap-3'>
                        <value.icon
                            className={`size-10 rounded-md ${value.color}`}
                        />
                        <div className='max-w-50'>
                            <h3 className='text-lg lg:text-2xl font-semibold'>
                                {value.title}
                            </h3>
                            <p className='text-(--color-secondary)'>
                                {value.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

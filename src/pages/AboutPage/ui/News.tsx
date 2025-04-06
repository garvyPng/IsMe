import { SectionHeader } from '../../../shared/ui/SectionHeader';

const news = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: '/images/video.jpg',
        tags: ['Insights', 'News'],
        publishedDate: '2023-10-01T10:00:00Z',
    },
    {
        title: 'Newest Update in Tech Industry',
        description:
            'Stay updated with the latest news in the tech industry. Discover innovations and trends that are shaping the future.',
        image: '/images/video.jpg',
        tags: ['Tech', 'Innovation'],
        publishedDate: '2023-10-05T10:00:00Z',
    },
    {
        title: 'Some text text text text text text text text text',
        description:
            'Stay updated with the latest news in the tech industry. Discover innovations and trends that are shaping the future.',
        image: '/images/video.jpg',
        tags: ['Tech', 'Innovation'],
        publishedDate: '2023-10-05T10:00:00Z',
    },
];

export const News = () => {
    return (
        <section className='container px-6 lg:max-w-6xl mx-auto mt-[80px] md:mt-[135px] h-auto flex flex-col  gap-x-6 lg:justify-between align-middle'>
            <SectionHeader title={"What's New"}></SectionHeader>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-10'>
                <div className='lg:col-span-2'>
                    <div className='bg-white mb-6 lg:mb-0'>
                        <img
                            src={news[0].image}
                            alt={news[0].title}
                            className='w-full h-30 md:h-60 lg:h-[450px] object-cover rounded-3xl'
                        />
                        <div className='flex text-xs lg:text-sm text-gray-600 mt-3 lg:mt-6 gap-x-3 '>
                            <div className='uppercase'>
                                {news[0].tags.map((tag) => (
                                    <span>{tag} | </span>
                                ))}
                            </div>

                            <p>
                                {new Date(
                                    news[0].publishedDate
                                ).toLocaleDateString('de-DE', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </p>
                        </div>
                        <h3 className='text-lg lg:text-2xl font-semibold mt-2 text-justify '>
                            {news[0].title}
                        </h3>
                        <p className='text-sm lg:text-base text-gray-600 mt-2  text-justify'>
                            {news[0].description}
                        </p>
                    </div>
                </div>
                <div className='lg:col-span-1 space-y-6'>
                    {news.slice(1, 3).map((item) => (
                        <div key={item.title} className='bg-white'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-full h-30 md:h-60 lg:h-40 object-cover rounded-3xl'
                            />
                            <div className='flex text-xs text-gray-600 mt-3 gap-x-3 '>
                                <div className='uppercase'>
                                    {item.tags.map((tag) => (
                                        <span>{tag} | </span>
                                    ))}
                                </div>

                                <p>
                                    {new Date(
                                        item.publishedDate
                                    ).toLocaleDateString('de-DE', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </p>
                            </div>
                            <h3 className='text-lg font-semibold mt-1  text-justify'>
                                {item.title}
                            </h3>
                            <p className='text-sm text-gray-600 mt-1  text-justify'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <a
                    className='mt-8 lg:mt-0 w-max grid-row-2 text-sm lg:text-base bg-linear-65 from-blue-300 from-40% to-green-300 text-transparent bg-clip-text no-underline hover:underline'
                    href='#'
                >
                    More news and insignts <span>&rarr;</span>
                </a>
            </div>
        </section>
    );
};

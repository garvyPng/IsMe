import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

// const news = [
//     {
//         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
//         image: '/images/video.jpg',
//         tags: ['Insights', 'News'],
//         publishedDate: '2023-10-01T10:00:00Z',
//     },
//     {
//         title: 'Newest Update in Tech Industry',
//         description:
//             'Stay updated with the latest news in the tech industry. Discover innovations and trends that are shaping the future.',
//         image: '/images/video.jpg',
//         tags: ['Tech', 'Innovation'],
//         publishedDate: '2023-10-05T10:00:00Z',
//     },
//     {
//         title: 'Some text text text text text text text text text',
//         description:
//             'Stay updated with the latest news in the tech industry. Discover innovations and trends that are shaping the future.',
//         image: '/images/video.jpg',
//         tags: ['Tech', 'Innovation'],
//         publishedDate: '2023-10-05T10:00:00Z',
//     },
//     {
//         title: 'Newest Update in Tech Industry2',
//         description:
//             'Stay updated with the latest news in the tech industry. Discover innovations and trends that are shaping the future.',
//         image: '/images/video.jpg',
//         tags: ['Tech', 'Innovation'],
//         publishedDate: '2023-10-05T10:00:00Z',
//     },
//     {
//         title: 'Some text text text text text text text text text12',
//         description:
//             'Stay updated with the latest news in the tech industry. Discover innovations and trends that are shaping the future.',
//         image: '/images/video.jpg',
//         tags: ['Tech', 'Innovation'],
//         publishedDate: '2023-10-05T10:00:00Z',
//     },

//     {
//         title: 'Newest Update in Tech Industry22',
//         description:
//             'Stay updated with the latest news in the tech industry. Discover innovations and trends that are shaping the future.',
//         image: '/images/video.jpg',
//         tags: ['Tech', 'Innovation'],
//         publishedDate: '2023-10-05T10:00:00Z',
//     },
//     {
//         title: 'Some text text text text text text text text text87',
//         description:
//             'Stay updated with the latest news in the tech industry. Discover innovations and trends that are shaping the future.',
//         image: '/images/video.jpg',
//         tags: ['Tech', 'Innovation'],
//         publishedDate: '2023-10-05T10:00:00Z',
//     },
// ];

const ITEMS_PER_PAGE = 6;

interface Article {
    id: string;
    title: string;
    description: string;
    cover: string;
    htmlContent: string;
    publishedDate: string;
    tags: string[];
}

interface BlogContentProps {
    articles: Article[];
    basePath: string;
}

export const BlogContent = ({ articles, basePath }: BlogContentProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const uniqueTags = [
        ...new Set(articles.flatMap((article) => article.tags)),
    ];

    const filteredArticles = articles.filter((article) => {
        const matchesSearch = article.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchesTag = selectedTag
            ? article.tags.includes(selectedTag)
            : true;

        return matchesSearch && matchesTag;
    });

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentNews = filteredArticles.slice(startIndex, endIndex);

    const handlePageClick = (e: { selected: number }) => {
        setCurrentPage(e.selected);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className='container px-6 lg:max-w-7xl mx-auto mt-[50px] h-auto flex flex-col md:flex-row gap-x-10'>
            <div className='w-full md:w-2/3'>
                <div className='flex'>
                    <input
                        type='text'
                        placeholder='&#128269; Search article...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='w-full md:max-w-md px-4 py-2 border-2 border-gray-300 rounded-lg  focus:border-gray-500 focus:outline-none'
                    />
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {uniqueTags.map((tag) => (
                        <button
                            key={tag}
                            className={`px-4 py-1 text-sm font-medium rounded-full transition ${
                                selectedTag === tag
                                    ? 'bg-gray-700 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-400'
                            }`}
                            onClick={() =>
                                setSelectedTag(selectedTag === tag ? null : tag)
                            }
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div className='my-8 w-full h-[2px] bg-linear-65 from-blue-300 to-green-300'></div>
                <div className='flex flex-wrap justify-between gap-y-8'>
                    {currentNews.length > 0 ? (
                        currentNews.map((article) => (
                            <div
                                key={article.id}
                                className='bg-white w-full lg:max-w-90'
                            >
                                <img
                                    src={article.cover}
                                    alt={article.title}
                                    className='w-full h-60 object-cover rounded-3xl'
                                />
                                <div className='flex flex-col text-xs text-gray-600 mt-3 gap-x-3 '>
                                    <div className='uppercase flex flex-wrap '>
                                        {article.tags.map((tag) => (
                                            <span key={tag}>{tag} | </span>
                                        ))}
                                    </div>

                                    <p>
                                        {new Date(
                                            article.publishedDate
                                        ).toLocaleDateString('de-DE', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </p>
                                </div>
                                <Link
                                    to={`${basePath}/article/${article.id}`}
                                    className='text-lg font-semibold mt-1  text-justify'
                                >
                                    {article.title}
                                </Link>
                                <p className='text-sm text-gray-600 mt-1  text-justify'>
                                    {article.description}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className='text-center text-gray-500 col-span-full mt-6'>
                            Nothing found... &#128533;
                        </p>
                    )}
                </div>
                <div className='flex mt-6'>
                    {filteredArticles.length > ITEMS_PER_PAGE && (
                        <ReactPaginate
                            previousLabel={'←'}
                            nextLabel={'→'}
                            breakLabel={'...'}
                            pageCount={Math.ceil(
                                filteredArticles.length / ITEMS_PER_PAGE
                            )}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={'flex space-x-2'}
                            pageLinkClassName={
                                'size-10 flex justify-center items-center bg-gray-100 transition-color duration-200 hover:bg-gray-300 rounded cursor-pointer'
                            }
                            activeLinkClassName={'!bg-blue-300 text-white'}
                            previousLinkClassName={
                                'size-10 flex justify-center items-center bg-gray-100 transition-color duration-200 hover:bg-gray-300 rounded cursor-pointer'
                            }
                            nextLinkClassName={
                                'size-10 flex justify-center items-center bg-gray-100 transition-color duration-200 hover:bg-gray-300 rounded cursor-pointer'
                            }
                            breakLinkClassName={
                                'size-10 flex justify-center items-center'
                            }
                        />
                    )}
                </div>
            </div>
            <div className='w-full md:w-1/3 mt-30 md:mt-0'>
                <p className='text-xl font-bold'>Trending</p>
                <div className='my-4 w-full h-[2px] bg-linear-65 from-blue-300 to-green-300'></div>
                <div className='space-y-8 md:space-y-3'>
                    {articles.slice(0, 5).map((item) => (
                        <div
                            key={item.id}
                            className='bg-white flex flex-col lg:flex-row gap-x-2'
                        >
                            <img
                                src={item.cover}
                                alt={item.title}
                                className='h-30 object-cover rounded-xl'
                            />
                            <div className='flex flex-col'>
                                <div className=' text-xs text-gray-600 mt-3 gap-x-1'>
                                    <div className='uppercase'>
                                        {item.tags.map((tag) => (
                                            <span key={tag}>{tag} | </span>
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
                                <Link
                                    to={`${basePath}/article/${item.id}`}
                                    className='text-base font-semibold mt-1'
                                >
                                    {item.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-8 md:mt-3 relative'>
                    <img
                        src='/images/video.jpg'
                        className=' h-[300px] object-cover rounded-xl'
                        alt='Some info'
                    />
                    <div className='absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center text-white text-2xl'>
                        Some Info
                    </div>
                </div>
                <div className='mt-3 relative'>
                    <img
                        src='/images/video.jpg'
                        className=' h-[300px] object-cover rounded-xl'
                        alt='Some info'
                    />
                    <div className='absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center text-white text-2xl'>
                        Some Info
                    </div>
                </div>
            </div>
        </section>
    );
};

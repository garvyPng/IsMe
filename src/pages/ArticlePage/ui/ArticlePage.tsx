import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useArticles } from '../../../shared/lib/context/ArticleContext';
import { BtnPrimary } from '../../../shared/ui/BtnPrimary';
export const ArticlePage = () => {
    const { id } = useParams<string>();
    // const location = useLocation();

    // const source = location.pathname.startsWith('/projects')
    //     ? 'projectsData'
    //     : 'blogData';
    const { getArticleById, articles } = useArticles();

    const articleId = id || '';
    const article = getArticleById(articleId);

    // useEffect(() => {
    //     if (!articles.length) {
    //         loadArticlesFromSource(source).then();
    //     }
    // }, [articles, source, loadArticlesFromSource]);

    useEffect(() => {
        console.log('Extracted ID:', articleId);
        console.log('Loaded article:', article);
        console.log('All articles:', articles);
    }, [articleId, article, articles]);

    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <div className='mt-24 py-24 sm:py-32'>
            <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
                <h1 className='text-3xl font-bold'>{article.title}</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: article.htmlContent }}
                    className='my-4 text-gray-700'
                />
                <Link to={'/blog'}>
                    <BtnPrimary secondary>Back to blog</BtnPrimary>
                </Link>
            </div>
        </div>
    );
};

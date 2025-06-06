import { useEffect } from 'react';
import { PageIntro } from '../../../shared/ui/PageIntro';
import { PreRegister } from '../../../shared/ui/PreRegister';
import { BlogContent } from './BlogContent';
import { useArticles } from '../../../shared/lib/context/ArticleContext';
import { useAuth } from '../../../shared/lib/context/AuthContext';

export const BlogPage = () => {
    const { articles, loadArticlesFromSource } = useArticles();
    useEffect(() => {
        loadArticlesFromSource('blogData').then();
    }, [loadArticlesFromSource]);
    const { session } = useAuth();
    return (
        <>
            <PageIntro
                title="What's"
                coloredTitle='New'
                subtitle='The revolutionary fraud prevention technology that will redefine digital trust. The revolutionary fraud prevention technology that will redefine digital trust.'
            />
            <BlogContent articles={articles} basePath='/blog' />
            {!session?.user && <PreRegister />}
        </>
    );
};

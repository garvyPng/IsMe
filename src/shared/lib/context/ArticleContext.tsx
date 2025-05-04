import { createContext, useContext, useState, ReactNode } from 'react';

interface Article {
    id: string;
    title: string;
    description: string;
    cover: string;
    htmlContent: string;
    postAuthor: object;
    publishedDate: string;
    updatedDate: string;
    tags: string[];
}

interface ArticleContextType {
    articles: Article[];
    loadArticlesFromSource: (source: string) => Promise<void>;
    getArticleById: (id: string) => Article | undefined;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const useArticles = (): ArticleContextType => {
    const context = useContext(ArticleContext);
    if (!context) {
        throw new Error('useArticles must be used within an ArticleProvider');
    }
    return context;
};

export function ArticleProvider({ children }: { children: ReactNode }) {
    const [articles, setArticles] = useState<Article[]>([]);

    // const loadArticlesFromSource = async (source: string) => {
    //     try {
    //         const module = await import(`../data/${source}.json`);
    //         setArticles(module.default);
    //     } catch (error) {
    //         console.error('Fehler beim Laden der Artikel:', error);
    //         setArticles([]);
    //     }
    // };

    const loadArticlesFromSource = async () => {
        try {
            const response = await fetch('/data/blogData.json');
            const data = await response.json();
            setArticles(data);
        } catch (error) {
            console.error('Error loading articles:', error);
        }
    };

    const getArticleById = (id: string) => {
        return articles.find((article) => article.id === id);
    };

    return (
        <ArticleContext.Provider
            value={{ articles, loadArticlesFromSource, getArticleById }}
        >
            {children}
        </ArticleContext.Provider>
    );
}

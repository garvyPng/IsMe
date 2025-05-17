import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';
import { AboutPage } from '../pages/AboutPage';
import { BlogPage } from '../pages/BlogPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ArticleProvider } from '../shared/lib/context/ArticleContext';
import { ArticlePage } from '../pages/ArticlePage';
import { AuthProvider } from '../shared/lib/context/AuthContext';
// import { Account } from '../pages/Account';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* <Route path='/account' element={<Account />} /> */}
                    <Route
                        path='/*'
                        element={
                            <ArticleProvider>
                                <Header />
                                <Routes>
                                    <Route path='/' element={<HomePage />} />
                                    <Route
                                        path='/about'
                                        element={<AboutPage />}
                                    />
                                    <Route
                                        path='/blog'
                                        element={<BlogPage />}
                                    />
                                    <Route
                                        path='/contact'
                                        element={<ContactPage />}
                                    />
                                    <Route
                                        path='/blog/article/:id'
                                        element={<ArticlePage />}
                                    />
                                    <Route
                                        path='*'
                                        element={<NotFoundPage />}
                                    />
                                </Routes>
                                <Footer />
                            </ArticleProvider>
                        }
                    ></Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;

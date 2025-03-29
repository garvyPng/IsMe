import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';
import { AboutPage } from '../pages/AboutPage';
import { NewsPage } from '../pages/NewsPage';
import { ContactPage } from '../pages/ContactPage';

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/news' element={<NewsPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;

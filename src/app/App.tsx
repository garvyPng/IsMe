import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Footer, Header } from "../widgets/Header";

function App() {
  return (
    <Router>
      {/* Хедер остается на всех страницах */}
      <Header />

      <Routes>
        {/* Главная страница по умолчанию */}
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

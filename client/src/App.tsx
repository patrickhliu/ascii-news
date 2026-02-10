import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UsNews from './pages/UsNews';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/us-news" element={<UsNews />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

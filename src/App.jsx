import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    path="*"
                    element={
                        <>
                            <Routes>
                                <Route path="/" element={<Carousel />} />{' '}
                                {/* only render the carousel on the home page */}
                            </Routes>
                            <ItemListContainer />
                        </>
                    }
                />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

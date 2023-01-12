import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Tiendas from './components/Tiendas';

function App() {
    return (
        <CartContextProvider>
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
                    <Route
                        path="/category/:id"
                        element={<ItemListContainer />}
                    />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Error404 />} />
                    <Route path="/tiendas" element={<Tiendas />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;

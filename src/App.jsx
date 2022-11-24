import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer
                greeting={
                    'Bienvenido a Life UP Game Store! Aquí encontrarás los mejores juegos y consolas para ti.'
                }
            />
            <Carousel />
            <Footer />
        </div>
    );
}

export default App;

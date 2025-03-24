import axios from 'axios';

const fetchBooks = async () => {
    try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
};

fetchBooks();

const Books = () => {
    return (
        <div>
            <h1>Libros</h1>
            <p>Esta es la ruta de prueba para la integración de la Google Books API.</p>
        </div>
    );
};

export default Books;

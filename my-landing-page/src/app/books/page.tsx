import axios from 'axios';
import BasicCard from 'src/components/Card';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

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
            <div>
                <Header></Header>
            </div>
            <div>
                <BasicCard></BasicCard>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Books;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookCard() {
  const [books, setBooks] = useState([]); // Estado para almacenar los libros
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=javascript')
      .then((response) => {
        const { data } = response;
        if (data.items) {
          setBooks(data.items);
        }
      })
      .catch((error) => console.error('Error fetching data with Axios:', error));
  }, []);

  const toggleDescription = (bookId: string) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [bookId]: !prev[bookId],
    }));
  };

  const maxLength = 200;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {books.map((book) => {
        const { id, volumeInfo } = book;
        const { title, authors, description, imageLinks } = volumeInfo;

        const isExpanded = expandedDescriptions[id];
        const shortDescription =
          description && description.length > maxLength
            ? description.substring(0, maxLength) + '...'
            : description;

        return (

          <div
          key={id}
          className="max-w-xs w-full sm:w-64 rounded overflow-hidden shadow-lg bg-white border border-gray-200 flex flex-col"
        >
          {/* Imagen */}
          <div className="h-48 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              className="object-contain h-full"
              src={imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
              alt={title}
            />
          </div>
      
          {/* Contenido con flex-grow */}
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600">
                {authors ? `Autor(es): ${authors.join(', ')}` : 'Autor no disponible'}
              </p>
              <p className="text-gray-700 text-sm mt-2">
                {isExpanded ? description : shortDescription || 'Sin descripción'}
              </p>
              {description && description.length > maxLength && (
                <button
                  onClick={() => toggleDescription(id)}
                  className="text-blue-500 hover:underline text-sm mt-1"
                >
                  {isExpanded ? 'Leer menos' : 'Leer más'}
                </button>
              )}
            </div>
      
            {/* Botón fijo abajo */}
            <div className="pt-4 mt-auto">
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Más información
              </button>
            </div>
          </div>
        </div>
      )})}
    </div>
  );
}

export default BookCard;

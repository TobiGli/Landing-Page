// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// interface BookProps {
//     title: string;
//     authors: string[];
//     description: string;
//     thumbnail: string;
//   }
  

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

//     export default function BookCard({ title, authors, description, thumbnail }: BookProps) {
//         return (
//           <Card sx={{ minWidth: 275, margin: 2 }}>
//             <CardContent>
//               <Box
//                 component="img"
//                 src={thumbnail}
//                 alt={title}
//                 sx={{ width: '100%', height: 'auto', marginBottom: 2 }}
//               />
//               <Typography variant="h6" component="div">
//                 {title}
//               </Typography>
//               <Typography sx={{ color: 'text.secondary', marginBottom: 1 }}>
//                 {authors.join(', ')}
//               </Typography>
//               <Typography variant="body2" sx={{ marginBottom: 2 }}>
//                 {description}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Más información</Button>
//             </CardActions>
//           </Card>
//         );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BookCard() {
  const [books, setBooks] = useState([]); // Estado para almacenar los libros

  useEffect(() => {
    // Llamado a la API usando Axios
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=javascript')
      .then((response) => {
        const { data } = response;
        if (data.items) {
          setBooks(data.items); // Guardar los libros en el estado
        }
      })
      .catch((error) => console.error('Error fetching data with Axios:', error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {books.map((book) => {
        const { id, volumeInfo } = book;
        const { title, authors, description, imageLinks } = volumeInfo;
        return (
          <div
            key={id}
            className="max-w-xs rounded overflow-hidden shadow-lg bg-white border border-gray-200"
          >
            <img
              className="w-full"
              src={imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
              alt={title}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600">
                {authors ? `Autor(es): ${authors.join(', ')}` : 'Autor no disponible'}
              </p>
              <p className="text-gray-700 text-sm mt-2">{description || 'Sin descripción'}</p>
            </div>
            <div className="px-4 pb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Más información
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookCard;
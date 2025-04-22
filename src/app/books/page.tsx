'use client'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Header from '@components/Header';
import BookCard from '@components/BookCard';
import Footer from '@components/Footer';
import { Card } from '@mui/material';

const Books = () => {
  return (
    <>
      <Header />

      <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-6">Libros sobre JavaScript</h1>
      <BookCard />
    </div>


      <Footer />
    </>
  );
};

export default Books;
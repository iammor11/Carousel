import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import Table from './Table';

const MainCarousel = () => {
  const [catData, setCatData] = useState([
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 20, name: 'Green' },
    { id: 18, name: 'Green' },
    { id: 19, name: 'Green' },
    { id: 20, name: 'Green' },
  ]);

  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
      {catData ? (
        <Carousel show={3}>
          <Table catData={catData} />
          <Table catData={catData} />
          <Table catData={catData} />
          <Table catData={catData} />
        </Carousel>
      ) : null}
    </div>
  );
};

export default MainCarousel;

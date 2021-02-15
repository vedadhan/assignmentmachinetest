import React, { useState, useEffect } from 'react';
import DataGrid from './DataGrid';

/*
const Photos = ({ data }) => {
  return <div />;
};
*/

const mapData = (data) => {
  const photos = [];

  for (let i = 0; i < 10; i += 1) {
    photos.push(data[i]);
  }

  return photos.map((x) => ({ ...x, isSelected: false }));
};

export const Home = () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((r) => {
        setData(mapData(r));
      });
  }, []);

  return (
    <div>
      <DataGrid data={data} setData={setData} />
    </div>
  );
};
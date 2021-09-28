import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default () => {
  const query = useQuery();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8088/api/ricknmorty?limit=${query.get('limit')}&offset=${query.get('offset')}`).then(resp => {
      const items = resp.data.data;
      console.log({ items });
      setData(items);
    });
  }, []);

  return (
    <div className='data'>
      <h3>Api Page!</h3>
      {!!!data.length ? (
        <h2>Loading ...</h2>
      ) : (
        <ul>
          {data.map(item => (
            <li className='item' key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

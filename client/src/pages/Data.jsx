import React, { useEffect, useState } from 'react';
import Item from '../components/Item';
import { getWithParams } from '../services/http.service';

export default () => {
  // const query = useQuery();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = ({ limit, offset } = { limit: null, offset: null }) =>
    getWithParams({ limit, offset })
      .then(resp => {
        const items = resp.data.data;
        console.log({ items });
        setData(items);
      })
      .catch(err => {
        console.error(err.message);
        console.error(err.stack);
        setError('Request timed out');
      });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='data'>
      <h3>Api Page!</h3>
      {!!!data.length && !!!error ? (
        <span>Loading ...</span>
      ) : !!error ? (
        <span style={{ color: '#c22' }}>{error}</span>
      ) : (
        <ul className='data-list'>
          {data.map(item => (
            <Item className='item' key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

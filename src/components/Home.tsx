import React from 'react';
import ArticleCard from './ArticleCard';
import { useAppSelector } from '../features/store';

const Home = () => {
  const {
    articles: { list },
  } = useAppSelector((state) => state);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
      {list &&
        list.map((item) => (
          <ArticleCard
            key={item.id}
            {...item}
          />
        ))}
    </div>
  );
};

export default Home;

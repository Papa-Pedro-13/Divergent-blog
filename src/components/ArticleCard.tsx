import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../utils/types';

const ArticleCard: React.FC<Article> = (item) => {
  return (
    <div className='p-4 rounded-xl bg-gray-800 flex flex-col '>
      <div className='font-bold text-neutral-300  text-xl'>{item.title}</div>
      <div className='text-neutral-500  text-md'>{item.short_description}</div>
      <Link
        to={`/articles/${item.id}`}
        className='mt-10'
      >
        <div className='w-full bg-red-600 text-neutral-200 text-xl text-center p-2 rounded-md hover:opacity-70 transition-all'>
          Подробнее
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;

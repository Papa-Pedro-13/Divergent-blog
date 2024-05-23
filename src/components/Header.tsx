import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../features/store';
import { filterByTitle } from '../features/articles';
import { Article } from '../utils/types';

const Header = () => {
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState<Article[]>([]);

  const dispatch = useAppDispatch();
  const {
    articles: { list, filtered },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (!list.length || search == '') return;

    dispatch(filterByTitle(search));
  }, [dispatch, list.length, search]);

  useEffect(() => {
    let res: Article[] = filtered;
    if (filtered.length > 5) {
      res = filtered.slice(0, 5);
    }

    setSearchRes(res);
  }, [filtered]);
  return (
    <div className=' bg-slate-600 py-6'>
      <div className='container flex justify-between items-center'>
        <Link
          to={'/'}
          className=' h-fit hover:opacity-70 transition-all'
        >
          <FaBlog
            size={30}
            color='#fff'
          />
        </Link>
        <div className='relative md:w-60 w-40'>
          <input
            type='text'
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search title...'
            className='rounded-md bg-white w-full
          py-2 px-4 text-neutral-900 outline-none '
          />
          {search ? (
            searchRes.length ? (
              <div className='absolute bottom-0 z-2 bg-white w-full rounded-md py-2 px-2 translate-y-[calc(100%+10px)] flex flex-col gap-2'>
                {searchRes.map((item) => (
                  <Link
                    key={item.id}
                    to={`articles/${item.id}`}
                    onClick={() => setSearch('')}
                    className='hover:bg-neutral-500 transition-all px-2 py-1 rounded-sm'
                  >
                    <div className='text-neutral-900 font-semibold text-lg leading-5'>
                      {item.title}
                    </div>
                    <div className='text-neutral-900 font-normal text-sm leading-4  sm:text-md sm:leading-5'>
                      {item.short_description}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className='absolute bottom-0 z-2 bg-white w-full rounded-md py-2 px-4 translate-y-[calc(100%+10px)]'>
                <div className='font-bold text-lg text-red-600'>Not found</div>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;

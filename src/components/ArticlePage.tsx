import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../features/store';
import { useParams } from 'react-router-dom';
import { Article } from '../utils/types';

const ArticlePage = () => {
  const {
    articles: { list, isLoading },
  } = useAppSelector((state) => state);
  const { id } = useParams();
  const [article, setArticle] = useState<Article>();
  const [countArticles, setCountArticles] = useState(0);
  const [countSymbols, setCountSymbols] = useState(0);
  const [comment, setComment] = useState<string>('');
  const [commentatorName, setCommentatorName] = useState<string>('');

  useEffect(() => {
    if (!id || list === undefined) return;

    setCountArticles(list.length);

    let sum = 0;
    list.forEach((item) => {
      if (item.id === +id) {
        setArticle(item);
        setComment(item.comment);
        setCommentatorName(item.comments_name);
      }
      sum += item.content.length;
      //item;
    });
    setCountSymbols(sum);
  }, [id, list]);

  return !isLoading ? (
    <div className='py-6'>
      <div className='font-bold text-2xl text-neutral-300'>
        {article?.title}
      </div>
      <div className='font-normal text-md text-neutral-300 mt-2'>
        {article?.content}
      </div>
      <div className='mt-14'>
        <div className='font-bold text-xl text-neutral-300'>Комментарии:</div>
        <div className='mt-4'>
          <div className='font-medium'>Author: {commentatorName}</div>
          <div className='mt-2 text-md text-neutral-300'>{comment}</div>
        </div>
      </div>
      <div className='grid grid-cols-3 border-slate-600 border-solid border-[1px] rounded-lg  mt-14 bg-neutral-200 text-slate-700'>
        <div className='px-1 py-2 sm:p-4 font-medium  text-[12px] sm:text-[20px] border-r-[1px]  border-slate-600'>
          Количество статей
        </div>
        <div className='px-1 py-2 sm:p-4 font-medium  text-[12px] sm:text-[20px] border-r-[1px]  border-slate-600'>
          Общее количество символов во всех статьях
        </div>
        <div className='px-1 py-2 sm:p-4 font-medium  text-[12px] sm:text-[20px]'>
          Количество комментариев к статье
        </div>
        <div className='px-1 py-2 sm:py-2 sm:px-4 text-md sm:text-xl font-bold  border-t-[1px] border-r-[1px] border-slate-600 border-solid  '>
          {countArticles}
        </div>
        <div className='px-1 py-2 sm:py-2 sm:px-4 text-md sm:text-xl font-bold  border-t-[1px] border-r-[1px] border-slate-600 border-solid  '>
          {countSymbols}
        </div>
        <div className='px-1 py-2 sm:py-2 sm:px-4 text-md sm:text-xl font-bold  border-t-[1px]  border-slate-600 border-solid  '>
          {1}
        </div>
      </div>
    </div>
  ) : (
    <div className='font-bold text-2xl text-neutral-300 mt-6'>
      Идет загрузка...
    </div>
  );
};

export default ArticlePage;

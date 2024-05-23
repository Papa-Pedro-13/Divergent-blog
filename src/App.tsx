import AppRoutes from './components/Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import { useAppDispatch } from './features/store';
import { useEffect } from 'react';
import { getArticles } from './features/articles';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div className='app flex flex-col justify-between min-h-[100lvh]'>
      <Header />
      <div className='container flex-auto'>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import Home from './Home';
import Article from './ArticlePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={<Home />}
      />
      <Route
        path={ROUTES.ARTICLE}
        element={<Article />}
      />
    </Routes>
  );
};
export default AppRoutes;

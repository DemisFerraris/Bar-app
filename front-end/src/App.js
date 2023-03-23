import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import UsersPage from './pages/UsersPage';
import NotFound from './pages/NotFound';
import FormUserPage from './pages/FormUserPage';
import LoggedUser from './pages/LoggedUser';
import './App.css';
import CartUser from './pages/CartUser';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="menu" element={<ProductPage />} />
        <Route path="login" element={<UsersPage />} />
        <Route path="register" element={<FormUserPage />} />
        <Route path="edit-user/:userId" element={<FormUserPage edit />} />
        <Route path="login-user/:userId/products" element={<LoggedUser />} />
        <Route path="/login-user/:userId/cart" element={<CartUser />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

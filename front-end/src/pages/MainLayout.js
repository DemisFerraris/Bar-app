import { Outlet } from 'react-router-dom';
import FooterComplete from '../components/navbar-footer/Footer';
import NavbarComplete from '../components/navbar-footer/Navbar';

const MainLayout = () => {
  return (
    <>
      <NavbarComplete />
      <Outlet />
      <FooterComplete />
    </>
  );
};

export default MainLayout;

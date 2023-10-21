import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
  const location = useLocation()
  const isLogin=location.pathname.includes('login')|| location.pathname.includes('signup')
  return (
    <>
    
    {isLogin||<Navbar></Navbar>}
      <Outlet></Outlet>
    {isLogin||<Footer></Footer>} 
   
    </>
  );
};

export default Main;

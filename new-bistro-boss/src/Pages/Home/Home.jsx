import { Helmet } from 'react-helmet-async';
import PopularMenu from "./PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Bistro Boss || Home</title>
        
      </Helmet>
      <Banner></Banner>
      <Category></Category>
    <PopularMenu></PopularMenu>
    </>
  );
};

export default Home;

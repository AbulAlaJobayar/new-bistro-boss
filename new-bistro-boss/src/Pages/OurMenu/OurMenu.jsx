import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImag from '../../assets/menu/menu-bg.jpg'
import soupImag from '../../assets/menu/soup-bg.jpg'
import pizzaImag from '../../assets/menu/pizza-bg.jpg'
import saladImag from '../../assets/menu/salad-bg.jpg'
import dessertImag from '../../assets/menu/dessert-bg.jpeg'
import { useMenu } from '../../hooks/useMenu';
import SectionTitle from '../../component/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const OurMenu = () => {
    const [menu]=useMenu()
    const  dessert= menu.filter(item=>item.category==='dessert');
    const soup =menu.filter(item=>item.category==='soup');
    const salad= menu.filter(item=>item.category==='salad')
    const pizza = menu.filter(item=>item.category==='pizza')
    const offered =menu.filter(item=>item.category==='offered')
    return (
        <>
        <Helmet>
        <title>Bistro Boss || Our Menu</title>
        
      </Helmet>
       <Cover img={menuImag} title={'Our Menu'}></Cover>
    <SectionTitle heading="Today's Offer" subHeading="Don't Miss"></SectionTitle>
    <MenuCategory title='dessert' img={dessertImag} items={dessert}></MenuCategory>
    <MenuCategory title='soup' img={soupImag} items={soup}></MenuCategory>
    <MenuCategory title='salad' img={saladImag} items={salad}></MenuCategory>
    <MenuCategory title='pizza' img={ pizzaImag} items={ pizza}></MenuCategory>
    <MenuCategory title='offered' img={ pizzaImag} items={ offered}></MenuCategory>
        </>
    );
};

export default OurMenu;
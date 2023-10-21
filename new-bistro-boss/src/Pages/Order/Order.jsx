import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import order from "../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenu } from "../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import Container from "../../Shared/Container/Container";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const Order = () => {
    const catagories=['dessert','soup','salad','pizza','offered'];
    const {category}= useParams();
    const initialIndex=catagories.indexOf(category);
    
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu]=useMenu()
 

  
  const  dessert= menu.filter(item=>item.category==='dessert');
  const soup =menu.filter(item=>item.category==='soup');
  const salad= menu.filter(item=>item.category==='salad')
  const pizza = menu.filter(item=>item.category==='pizza')
  const offered =menu.filter(item=>item.category==='offered')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order Food</title>
      </Helmet>
      <Cover img={order} title="Order Food"></Cover>
      <Container>
      <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Offered</Tab>
          
        </TabList>
        <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={salad}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={offered}></OrderTab></TabPanel>
       
      </Tabs>
      </Container>
    </div>
  );
};

export default Order;

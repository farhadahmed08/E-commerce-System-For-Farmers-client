import { useState } from "react";
import { useParams } from "react-router-dom";
import UseProduct from "../../../Hooks/UseProduct";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import orderCoverImg from "../../../assets/productBG/order.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const categories = [
    "Vegetables",
    "Fruits",
    "Dairy and Eggs",
    "Grains",
    "Meat and Fish",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  // const [product] = UseProduct();

  const [search, setSearch] = useState("");
  const [asc, setAsc] = useState(true);
  const [product] = UseProduct(asc, search);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setSearch(searchText);
  };

  const Vegetables = product.filter((item) => item.category === "Vegetables");
  const Fruits = product.filter((item) => item.category === "Fruits");
  const DairyAndEggs = product.filter(
    (item) => item.category === "Dairy and Eggs"
  );
  const Grains = product.filter((item) => item.category === "Grains");
  const MeatAndFish = product.filter(
    (item) => item.category === "Meat and Fish"
  );

  return (
    <div>
      <Helmet>
        <title>Organic | Order Product</title>
      </Helmet>
      <Cover
        img={orderCoverImg}
        title="Order Product"
        subHeading="Order with confidence from Farm Fresh for a delightful experience of farm-fresh, organic goodness delivered to your doorstep. Elevate your well-being with every wholesome choice."
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Vegetables</Tab>
          <Tab>Fruits</Tab>
          <Tab>Dairy and Eggs</Tab>
          <Tab>Grains</Tab>
          <Tab>Meat and Fish</Tab>
        </TabList>
        <TabPanel>
          <OrderTab
            items={Vegetables}
            handleSearch={handleSearch}
            asc={asc}
            setAsc={setAsc}
          ></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab
            items={Fruits}
            handleSearch={handleSearch}
            asc={asc}
            setAsc={setAsc}
          ></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab
            items={DairyAndEggs}
            handleSearch={handleSearch}
            asc={asc}
            setAsc={setAsc}
          ></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab
            items={Grains}
            handleSearch={handleSearch}
            asc={asc}
            setAsc={setAsc}
          ></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab
            items={MeatAndFish}
            handleSearch={handleSearch}
            asc={asc}
            setAsc={setAsc}
          ></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;

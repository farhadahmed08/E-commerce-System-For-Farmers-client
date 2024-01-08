import { Helmet } from "react-helmet-async";
import UseProduct from "../../../Hooks/UseProduct";
import Cover from "../../Shared/Cover";
import productImg from '../../../assets/productBG/product.jpg'
import grainImg from '../../../assets/productBG/grains.jpg'
import fruitImg from '../../../assets/productBG/fruits.jpg'
import dairyImg from '../../../assets/productBG/dairy.png'
import vegetable from '../../../assets/productBG/vegetable.png'
import meatAndFishImg from '../../../assets/productBG/meat and fish.jpg'
import SectionTitle from "../../../Components/SectionTitle";
import ProductCategory from "../ProductCategory/ProductCategory";



const Product = () => {

    const [product] = UseProduct();
    const Vegetables = product.filter(item => item.category === 'Vegetables');
    const DairyAndEggs = product.filter(item => item.category === 'Dairy and Eggs');
    const Fruits = product.filter(item => item.category === 'Fruits');
    const MeatAndFish = product.filter(item => item.category === 'Meat and Fish');
    const Grains = product.filter(item => item.category === 'Grains');



    return (
        <div>
             <Helmet>
                <title>Organic | Product</title>
            </Helmet>
            <Cover img={productImg} title="our Product" subHeading="Indulge in the pure essence of nature with Farm Fresh exquisite range. From vibrant fruits to nutrient-rich grains, our organic products embody the essence of wholesome, sustainable nourishment."></Cover>
            <SectionTitle subHeading="Don't Miss" heading="This Weeks Deal"></SectionTitle>
            <ProductCategory items={ Vegetables} title="Vegetables" img={vegetable} ></ProductCategory>
            <ProductCategory items={ DairyAndEggs} title="Dairy and Eggs" img={dairyImg}></ProductCategory>
            <ProductCategory items={ Fruits} title="Fruits" img={fruitImg}></ProductCategory>
            <ProductCategory items={ MeatAndFish} title="Meat and Fish" img={meatAndFishImg}></ProductCategory>
            <ProductCategory items={ Grains} title="Grains" img={grainImg}></ProductCategory>
            
        </div>
    );
};

export default Product;